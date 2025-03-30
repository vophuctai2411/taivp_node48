import dotenv from "dotenv";
import transporter from "../config/transporter.js";

dotenv.config();

export const sendMailForgotPassword = (res, mailOption) => {
  return transporter.sendMail(mailOption, (err, info) => {
    if (err)
      return res
        .status(500)
        .json({ message: "Gui mail that bai", content: err });
    else return res.status(200).json({ message: "Gui mail thanh cong" });
  });
};
