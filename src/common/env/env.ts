import * as dotenv from 'dotenv';

export async function initEnv() {
  dotenv.config();

  const env = {
    LOGGER_DB_KEY: process.env.LOGGER_DB_KEY,
  } as TypeEnv;

  globalThis.env = env;
}

export interface TypeEnv {
  LOGGER_DB_KEY: string;
}
