import jwt from "jsonwebtoken";
import dotenv from "dotenv";

dotenv.config();

const createAccessToken = (payload) => {
  return jwt.sign({ payload }, process.env.SECRET_KEY, {
    algorithm: "HS256",
    expiresIn: "2h",
  });
};

const verifyAccessToken = (accessToken) => {
  try {
    const payload = jwt.verify(accessToken, process.env.SECRET_KEY);
    return true;
  } catch (error) {
    return false;
  }
};

const middlewareToken = (req, res, next) => {
  let { token } = req.headers;
  //truong hop 1: khong co token
  if (!token) {
    return res.status(401).json({ message: "Authorized" });
  }
  //truong hop 2: token khong hop le
  let checkToken = verifyAccessToken(token);
  if (!checkToken) {
    return res.status(401).json({ message: "Authorized" });
  }

  //TH3: token hop le
  next();
};

export { createAccessToken, verifyAccessToken, middlewareToken };
