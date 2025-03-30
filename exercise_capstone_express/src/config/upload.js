import multer, { diskStorage } from "multer";

export const upload = multer({
  storage: diskStorage({
    destination: process.cwd() + "/public/images",
    filename: (req, file, callback) => {
      let newName = new Date().getTime() + "_" + file.originalname;
      callback(null, newName);
    },
  }),
});
