import initModels from "../models/init-models.js";
import connect from "../models/connect.js";
import like_res from "../models/like_res.js";

const models = initModels(connect);

const likeRestaurant = async (req, res) => {
  try {
    const { user_id, res_id } = req.body;
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

    const likeExists = await models.like_res.findOne({
      where: {
        user_id,
        res_id,
      },
    });

    if (likeExists) {
      res.status(400).json({ message: "Da like nha hang nay" });
      return;
    }

    await models.like_res.create({
      user_id,
      res_id,
      date_like: new Date(),
    });

    res.status(200).json({ message: "Like thanh cong" });
  } catch (error) {
    res.send(error);
  }
};

const dislikeRestaurant = async (req, res) => {
  try {
    const { user_id, res_id } = req.body;
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

    const likeExists = await models.like_res.findOne({
      where: {
        user_id,
        res_id,
      },
    });

    if (!likeExists) {
      res.status(400).json({ message: "Chua like nha hang nay" });
      return;
    }

    await models.like_res.destroy({
      where: {
        user_id,
        res_id,
      },
    });

    res.status(200).json({ message: "dislike thanh cong" });
  } catch (error) {
    res.send(error);
  }
};

const likeByUserAndRes = async (req, res) => {
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

    const likeExists = await models.like_res.findAll({
      where: {
        user_id,
        res_id,
      },
    });

    if (!likeExists) {
      res.status(400).json({ message: "Chua like nha hang" });
      return;
    }

    res.status(200).json(likeExists);
  } catch (error) {
    res.send(error);
  }
};

export { likeRestaurant, dislikeRestaurant, likeByUserAndRes };
