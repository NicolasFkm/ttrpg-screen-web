import { configDotenv } from 'dotenv';

configDotenv();
export default {
  reactStrictMode: true,
  env: {
    WS_BASE_URL: process.env.WS_BASE_URL,
    HTTP_BASE_URL: process.env.HTTP_BASE_URL,
  },
};
