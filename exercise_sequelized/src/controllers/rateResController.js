import initModels from "../models/init-models.js";
import connect from "../models/connect.js";
import rate_res from "../models/rate_res.js";

const models = initModels(connect);

const rateRestaurant = async (req, res) => {
  try {
    const { user_id, res_id, amount } = req.body;
    const userExists = await models.users.findOne({
      where: {
        user_id,
      },
    });

    if (!userExists) {
      res.status(400).json({ message: "User khong ton tai" });
      return;
    }

    const resExists = await models.restaurants.findOne({
      where: {
        res_id,
      },
    });

    if (!resExists) {
      res.status(400).json({ message: "Nha hang khong ton tai" });
      return;
    }

    await models.rate_res.create({
      user_id,
      res_id,
      amount,
      date_rate: new Date(),
    });

    res.status(200).json({ message: "rate thanh cong" });
  } catch (error) {
    res.send(error);
  }
};

const rateByUserAndRes = async (req, res) => {
  try {
    const { user_id, res_id } = req.params;
    const userExists = await models.users.findOne({
      where: {
        user_id,
      },
    });

    if (!userExists) {
      res.status(400).json({ message: "User khong ton tai" });
      return;
    }

    const resExists = await models.restaurants.findOne({
      where: {
        res_id,
      },
    });

    if (!resExists) {
      res.status(400).json({ message: "Nha hang khong ton tai" });
      return;
    }

    const rateExists = await models.rate_res.findAll({
      where: {
        user_id,
        res_id,
      },
    });

    if (!rateExists) {
      res.status(400).json({ message: "Chua rate nha hang" });
      return;
    }

    res.status(200).json(rateExists);
  } catch (error) {
    res.send(error);
  }
};

export { rateRestaurant, rateByUserAndRes };
