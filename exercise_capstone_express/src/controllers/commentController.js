import connect from "../models/connect.js";

const addComment = async (req, res) => {
  const { nguoi_dung_id, hinh_id, noi_dung } = req.body;

  try {
    const [result] = await connect.query(
      `INSERT INTO binh_luan (nguoi_dung_id, hinh_id, noi_dung, ngay_binh_luan) 
         VALUES (:nguoi_dung_id, :hinh_id, :noi_dung, NOW());`,
      {
        replacements: { nguoi_dung_id, hinh_id, noi_dung }, // Use an object for replacements
        type: connect.QueryTypes.INSERT,
      }
    );
    return res.send({
      message: "Bình luận đã được lưu thành công!",
      comment_id: result,
    });
  } catch (error) {
    console.error(error);
    return res.status(500).send("Lỗi khi lưu bình luận.");
  }
};

export { addComment };
