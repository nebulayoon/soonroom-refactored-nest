import * as dotenv from 'dotenv';
import axios from 'axios';

export async function initEnv() {
  dotenv.config();

  const { data } = await axios.get('http://192.168.0.13:3002/env');

  const env: TypeEnv = {
    NODE_ENV: data.NODE_ENV,
    MYSQL_USER: data.MYSQL_USER,
    MYSQL_USER_PASSWORD: data.MYSQL_USER_PASSWORD,
    SENTRY_TOKEN: data.SENTRY_TOKEN,
    ORGANIZATION_SLUG: data.ORGANIZATION_SLUG,
    TEAM_SLUG: data.TEAM_SLUG,
  };

  globalThis.env = env;
}

export interface TypeEnv {
  NODE_ENV: string;
  MYSQL_USER: string;
  MYSQL_USER_PASSWORD: string;
  SENTRY_TOKEN: string;
  ORGANIZATION_SLUG: string;
  TEAM_SLUG: string;
}
