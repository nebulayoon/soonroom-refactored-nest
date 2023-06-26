import * as dotenv from 'dotenv';
import axios from 'axios';

export async function initEnv() {
  dotenv.config();

  const { data } = await axios.get('http://192.168.0.13:3002/env');

  const env = {
    MYSQL_USER: data.MYSQL_USER,
    MYSQL_USER_PASSWORD: data.MYSQL_USER_PASSWORD,
  } as TypeEnv;

  globalThis.env = env;
}

export interface TypeEnv {
  MYSQL_USER: string;
  MYSQL_USER_PASSWORD: string;
}
