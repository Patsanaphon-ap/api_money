import { Sequelize } from "sequelize";
import env from "./env.config";

const sequelize = new Sequelize(env.DATABASE, env.USERNAME, env.PASSWORD, {
    host: env.HOST,
    port: 5431,
    dialect: "postgres",
    // schema: "postgres",
    operatorsAliases: undefined,
    dialectOptions: {
      useUTC: false
    },
    timezone: "+07:00",
    logging: false,
  });


export default sequelize;