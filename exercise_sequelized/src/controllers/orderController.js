import initModels from "../models/init-models.js";
import connect from "../models/connect.js";

const models = initModels(connect);

const createOrder = async (req, res) => {
  try {
    const { user_id, res_id, food_id, amount, code, arr_sub_id } = req.body;
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

    const foodExists = await models.food.findOne({
      where: {
        food_id,
      },
    });

    if (!foodExists) {
      res.status(400).json({ message: "Khong ton tai san pham nay" });
      return;
    }

    await models.orders.create({
      user_id,
      res_id,
      food_id,
      amount,
      code,
      arr_sub_id,
    });

    res.status(200).json({ message: "Order thanh cong" });
  } catch (error) {
    res.send(error);
  }
};

export { createOrder };
