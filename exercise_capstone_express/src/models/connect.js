import { Sequelize } from "sequelize";
import dotenv from "dotenv";

dotenv.config();

const connect = new Sequelize(
    process.env.DB_DATABASE,
    process.env.DB_USERNAME,
    process.env.DB_PASSWORD,
    {
        host: process.env.DB_HOST,
        dialect: 'mysql',
        port: process.env.DB_PORT
    }
)

export default connect;