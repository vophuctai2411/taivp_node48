import connect from "../../db.js";

async function getUsers(req, res) {
  try {
    const [data] = await connect.query(`
        SELECT * FROM nguoi_dung
    `);
    return res.send(data);
  } catch (error) {
    return res.send(`Error: ${error}`);
  }
}

async function updateUser(req, res) {
  const { nguoi_dung_id } = req.params;
  const { ho_ten, tuoi, anh_dai_dien } = req.body;

  try {
    const [result] = await connect.query(
      `
    UPDATE nguoi_dung 
    SET 
      ho_ten = ?, 
      tuoi = ?, 
      anh_dai_dien = ?
    WHERE nguoi_dung_id = ?;
  `,
      [ho_ten, tuoi, anh_dai_dien, nguoi_dung_id]
    ); // Securely pass parameters

    return res.send("Cập nhật thành công!"); // Send response
  } catch (error) {
    console.error(error);
    return res.status(500).send("Lỗi khi cập nhật người dùng.");
  }
}

const uploadAvatar = async (req, res) => {
  try {
    let file = req.file;
    return res.status(200).json(file);
  } catch (error) {
    return res.status(500).json({ message: "Error upload avatar" });
  }
};

const uploadMultipleImgs = async (req, res) => {
  try {
    let files = req.files;
    return res.status(200).json(files);
  } catch (error) {
    return res.status(500).json({ message: "Error upload multiple images" });
  }
};

const uploadAvatarCloud = async (req, res) => {
  try {
    let file = req.file;
    return res.status(200).json(file);
  } catch (error) {
    return res.status(500);
  }
};

export {
  getUsers,
  updateUser,
  uploadAvatar,
  uploadMultipleImgs,
  uploadAvatarCloud,
};
