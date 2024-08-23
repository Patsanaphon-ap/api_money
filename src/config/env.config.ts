import * as dotenv from "dotenv";
dotenv.config();

export default {
  PORT: process.env.PORT || 4004,
  DBPORT: process.env.DB_PORT,
  HOST: process.env.DB_HOST,
  USERNAME: process.env.DB_USERNAME,
  PASSWORD: process.env.DB_PASSWORD,
  DATABASE: process.env.DB_DATABASE,
 
};
