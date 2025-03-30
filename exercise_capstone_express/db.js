import mysql from "mysql2/promise";
import dotenv from "dotenv";

dotenv.config();

const connect = mysql.createPool({
    host: process.env.DB_HOST,
    user: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_DATABASE,
    port: process.env.DB_PORT
})

export default connect;