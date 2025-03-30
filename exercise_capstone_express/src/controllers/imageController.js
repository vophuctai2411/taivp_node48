import initModels from "../models/init-models.js";
import connect from "../models/connect.js";
import { formatImageList } from "../utils/formatData.js";
import nguoi_dung from "../models/nguoi_dung.js";
import db_connect from "../../db.js";

const models = initModels(connect);

const listImage = async (req, res) => {
  try {
    const listImages = await models.hinh_anh.findAll();
    const formatedImages = formatImageList(listImages);
    return res.status(200).json(formatedImages);
  } catch (error) {
    console.log(error);
    return res.status(500).json({ message: "List Image Error" });
  }
};

const findImageByName = async (req, res) => {
  try {
    const { ten_hinh } = req.query;
    console.log(ten_hinh);

    const listImages = await models.hinh_anh.findAll({
      where: {
        ten_hinh: ten_hinh,
      },
    });
    const formatedImages = formatImageList(listImages);
    return res.status(200).json(formatedImages);
  } catch (error) {
    console.log(error);
    return res.status(500).json({ message: "List Image Error" });
  }
};

const findImageAndUserById = async (req, res) => {
  try {
    const { id } = req.params;
    console.log(id);

    const [data] = await db_connect.query(`
      SELECT 
    ha.hinh_id,
    ha.ten_hinh,
    ha.duong_dan,
    ha.mo_ta,
    nd.nguoi_dung_id,
    nd.email,
    nd.ho_ten,
    nd.anh_dai_dien
FROM hinh_anh AS ha
JOIN nguoi_dung AS nd ON ha.nguoi_dung_id = nd.nguoi_dung_id
WHERE ha.hinh_id = ${id};
  `);

    return res.status(200).json(data);
  } catch (error) {
    console.log(error);
    return res.status(500).json({ message: "List Image Error" });
  }
};

const createImage = async (req, res) => {
  try {
    const queryString = `INSERT INTO images(image_name, thumbnail, description) VALUES(?, ?, ?)`;
    let body = req.body;
    let { image_name, thumbnail, description } = body;
    const [data] = await connect.execute(queryString, [
      image_name,
      thumbnail,
      description,
    ]);
    return res.send(data);
  } catch (error) {
    res.send(error);
  }
};

const getImageType = async (req, res) => {
  try {
    const listImageType = await models.image_types.findAll();
    return res.status(200).json(listImageType);
  } catch (error) {
    console.log(error);
    return res.status(500).json({ message: "List Image Type Error" });
  }
};

const createImageType = async (req, res) => {
  try {
    const { type_name } = req.body;
    const result = await models.image_types.create({
      type_name: type_name,
    });

    return res.status(200).json("ngon ngon");
  } catch (error) {
    return res.status(500).json(error);
  }
};

const updateImage = async (req, res) => {
  try {
    const { imageId } = req.params;
    const { image_name } = req.body;

    console.log(imageId);

    const result = await models.hinh_anh.update(
      {
        image_name: image_name,
      },
      {
        where: {
          image_id: imageId,
        },
      }
    );

    console.log("Sau khi update: ", { result });

    return res.status(200).json("ngon ngon");
  } catch (error) {
    return res.status(500).json(error);
  }
};

const deleteImage = async (req, res) => {
  try {
    const { imageId } = req.params;

    console.log(imageId);

    const result = await models.hinh_anh.destroy({
      where: {
        image_id: imageId,
      },
    });

    console.log("Sau khi delete: ", { result });

    return res.status(200).json("ngon ngon");
  } catch (error) {
    return res.status(500).json(error);
  }
};

export {
  listImage,
  findImageByName,
  findImageAndUserById,
  createImage,
  getImageType,
  createImageType,
  updateImage,
  deleteImage,
};
