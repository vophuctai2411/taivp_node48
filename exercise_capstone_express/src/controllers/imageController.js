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

const findCommentByImageId = async (req, res) => {
  try {
    const { id } = req.params;
    console.log(id);

    const [data] = await db_connect.query(`
      SELECT 
    bl.binh_luan_id, 
    bl.hinh_id, 
    bl.noi_dung, 
    nd.nguoi_dung_id, 
    nd.email, 
    nd.ho_ten, 
    nd.anh_dai_dien
    FROM binh_luan AS bl
    JOIN nguoi_dung AS nd ON bl.nguoi_dung_id = nd.nguoi_dung_id
    WHERE bl.hinh_id = ${id};
  `);

    return res.status(200).json(data);
  } catch (error) {
    console.log(error);
    return res.status(500).json({ message: "List Image Error" });
  }
};

const isSaveImage = async (req, res) => {
  try {
    const { id } = req.params;
    console.log(id);

    const [data] = await db_connect.query(`
      SELECT * from hinh_anh where hinh_id=${id};
  `);

    if (data?.length > 0) return res.status(200).json({ data, isSave: true });
    else return res.status(200).json({ isSave: false });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ message: "List Image Error" });
  }
};

const findImageByUserId = async (req, res) => {
  try {
    const { userid } = req.params;
    console.log(userid);

    const [data] = await db_connect.query(`
      SELECT 
    hinh_id, 
    ten_hinh, 
    duong_dan, 
    mo_ta, 
    nguoi_dung_id
    FROM hinh_anh
    WHERE nguoi_dung_id =  ${userid};
  `);

    return res.status(200).json(data);
  } catch (error) {
    console.log(error);
    return res.status(500).json({ message: "List Image Error" });
  }
};
const insertImage = async (req, res) => {
  const { ten_hinh, duong_dan, mo_ta, nguoi_dung_id } = req.body;
  console.log(ten_hinh, duong_dan, mo_ta, nguoi_dung_id);
  try {
    const [result] = await db_connect.query(
      `
    INSERT INTO hinh_anh (ten_hinh, duong_dan, mo_ta, nguoi_dung_id) 
    VALUES (?, ?, ?, ?);
  `,
      [ten_hinh, duong_dan, mo_ta, nguoi_dung_id]
    ); // Secure parameterized query

    return res.send({
      message: "Ảnh đã được đăng thành công!",
      image_id: result.insertId,
    });
  } catch (error) {
    console.error(error);
    return res.status(500).send("Lỗi khi đăng ảnh.");
  }
};

const deleteImage = async (req, res) => {
  try {
    const { imageId } = req.params;

    console.log(imageId);

    const result = await models.hinh_anh.destroy({
      where: {
        hinh_id: imageId,
      },
    });
    return res.status(200).json("Da xoa hinh anh");
  } catch (error) {
    return res.status(500).json(error);
  }
};

export {
  listImage,
  findImageByName,
  findImageAndUserById,
  findCommentByImageId,
  isSaveImage,
  findImageByUserId,
  deleteImage,
  insertImage,
};
