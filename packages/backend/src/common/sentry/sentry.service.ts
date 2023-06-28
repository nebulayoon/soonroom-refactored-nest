import { Injectable } from '@nestjs/common';
import * as Sentry from '@sentry/node';
import axios from 'axios';
import { EntityService } from '@database/main.service';
import { SentryDataDto } from './dto/sentry.dto';
import { SentryEntity } from '@database/entity/sentry.entity';
import {
  SentryCreateProjectDto,
  SentryProjectDsnsDto,
} from './dto/sentryApi.dto';

@Injectable()
export class SentryService {
  token: string;
  organizationSlug: string;
  teamSlug: string;

  constructor(private readonly entityService: EntityService) {}

  async getProjectDsn(projectSlug: string): Promise<SentryProjectDsnsDto> {
    const sentryApi = `https://sentry.io/api/0/projects/${this.organizationSlug}/${projectSlug}/keys/`;

    try {
      const response = await axios.post(sentryApi, undefined, {
        headers: { Authorization: 'Bearer ' + this.token },
      });
      const reuslt: SentryProjectDsnsDto = response.data;

      return reuslt;
    } catch (e) {
      return undefined;
    }
  }

  async createProject(projectName: string, serverName: string) {
    const sentryApi = `https://sentry.io/api/0/teams/${this.organizationSlug}/${this.teamSlug}/projects/`;
    const data = {
      name: projectName,
    };

    try {
      const response = await axios.post(sentryApi, data, {
        headers: { Authorization: 'Bearer ' + this.token },
      });

      const projectInfo: SentryCreateProjectDto = response.data;
      const projectDsn: SentryProjectDsnsDto = await this.getProjectDsn(
        projectInfo.slug,
      );

      await this.entityService.sentry.create({
        serverName: serverName,
        projectSlug: projectInfo.slug,
        dsn: projectDsn.dsn.public,
      });

      return projectInfo;
    } catch (e) {
      console.log(e);
      return undefined;
    }
  }

  async sendException(sentryDataDto: SentryDataDto) {
    const serverDsnSelect: SentryEntity = await (async () => {
      const data = await this.entityService.sentry.findOne(
        sentryDataDto.serverName,
      );
      if (data !== null) {
        const created = await this.createProject(
          sentryDataDto.serverName,
          sentryDataDto.serverName,
        );

        if (created === undefined) {
          return undefined;
        }

        return await this.entityService.sentry.findOne(
          sentryDataDto.serverName,
        );
      } else {
        return data;
      }
    })();

    if (serverDsnSelect === undefined) {
      return undefined;
    }

    Sentry.init({
      dsn: serverDsnSelect.dsn,
      tracesSampleRate: 1.0,
      integrations: [new Sentry.Integrations.Http({ tracing: true })],
    });

    Sentry.configureScope((scope) =>
      scope.setTransactionName(sentryDataDto.serverName),
    );

    Sentry.setContext('context', {
      context: sentryDataDto.context,
    });

    try {
      Sentry.captureException(sentryDataDto.error, {
        tags: {
          serverName: sentryDataDto.serverName,
          ...sentryDataDto.tags,
        },
      });
    } catch (e) {
      console.log(e);
      return undefined;
    }
  }

  // async sendHubException(sentryDataDto: SentryDataDto) {
  //   const serverDsnSelect: SentryEntity = await (async () => {
  //     const data = await this.entityService.sentry.findOne(
  //       sentryDataDto.serverName,
  //     );
  //     if (data !== null) {
  //       const created = await this.createProject(
  //         sentryDataDto.serverName,
  //         sentryDataDto.serverName,
  //       );

  //       if (created === undefined) {
  //         return undefined;
  //       }

  //       return await this.entityService.sentry.findOne(
  //         sentryDataDto.serverName,
  //       );
  //     } else {
  //       return data;
  //     }
  //   })();

  //   if (serverDsnSelect === undefined) {
  //     return undefined;
  //   }

  //   const hub = new Sentry.Hub(
  //     new Sentry.NodeClient({
  //       dsn: serverDsnSelect.dsn,
  //       integrations: [],
  //       transport: Sentry.,
  //       stackParser: null,
  //     }),
  //   );
  //   Sentry.getCurrentHub().bindClient(hub.getClient());

  //   // const error = plainToInstance(Error, sentryDataDto.error);
  //   const error = Object.assign(new Error(), sentryDataDto.error)

  //   Sentry.configureScope((scope) =>
  //     scope.setTransactionName(sentryDataDto.serverName),
  //   );

  //   Sentry.setContext('context', {
  //     context: sentryDataDto.context,
  //   });

  //   try {
  //     hub.captureException(error);
  //     Sentry.captureException(error, {
  //       tags: {
  //         serverName: sentryDataDto.serverName,
  //         ...sentryDataDto.tags,
  //       },
  //     });
  //   } catch (e) {
  //     console.log(e);
  //     return undefined;
  //   }
  // }
}
