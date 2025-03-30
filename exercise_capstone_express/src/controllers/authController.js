import initModels from "../models/init-models.js";
import connect from "../models/connect.js";
import bcrypt from "bcrypt";
import { createAccessToken } from "../config/jwt.js";

const models = initModels(connect);

const register = async (req, res) => {
  try {
    const { email, mat_khau, ho_ten, tuoi } = req.body;
    console.log(email, mat_khau, ho_ten, tuoi);
    const userExists = await models.nguoi_dung.findOne({
      where: {
        email: email,
      },
    });

    if (userExists) {
      res.status(400).json({ message: "Tai khoan da ton tai" });
      return;
    }

    const hashPassword = bcrypt.hashSync(mat_khau, 10);

    const result = models.nguoi_dung.create({
      email,
      mat_khau: hashPassword,
      ho_ten,
      tuoi,
    });

    res.send({ message: "Tao tai khoan thanh cong" });
  } catch (error) {
    res.send(error);
  }
};

const login = async (req, res) => {
  try {
    const { email, mat_khau } = req.body;
    const userExists = await models.nguoi_dung.findOne({
      where: {
        email: email,
      },
    });

    if (!userExists) {
      res.status(400).json({ message: "Email chua ton tai" });
      return;
    }

    const isMatch = bcrypt.compareSync(
      mat_khau,
      userExists.dataValues.mat_khau
    );

    console.log(mat_khau, userExists.dataValues, isMatch);
    if (!isMatch) {
      res.status(400).json({ message: "Tai khoan hoac Mat khau khong hop le" });
      return;
    }

    const payload = {
      userId: userExists.nguoi_dung_id,
    };

    const accessToken = createAccessToken(payload);

    res
      .status(200)
      .json({ message: "dang nhap thanh cong", token: accessToken });
  } catch (error) {
    res.send(error);
  }
};

export { register, login };
