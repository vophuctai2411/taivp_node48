import jwt from "jsonwebtoken";
import dotenv from "dotenv";

dotenv.config();

const createAccessToken = (payload) =>{
    return jwt.sign({payload}, process.env.SECRET_KEY, {
        algorithm: "HS256",
        expiresIn: "2h"
    });
}

export { createAccessToken }