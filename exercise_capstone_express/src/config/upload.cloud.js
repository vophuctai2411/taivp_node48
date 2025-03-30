import express from "express";
import { v2 as cloudinary } from "cloudinary";
import multer from "multer";
import { CloudinaryStorage } from "multer-storage-cloudinary";
import dotenv from "dotenv";

dotenv.config();

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_SECRET,
});

const storage = new CloudinaryStorage({
  cloudinary: cloudinary,
  params: {
    folder: "avatar",
    format: async (req, file) => {
      const allowFormats = ["png", "jpg", "gif", "webp", "jpeg"];
      const fileFormat = file.mimetype.split("/")[1];
      if (allowFormats.includes(fileFormat)) {
        return fileFormat;
      }
      return "png";
    },
    public_id: (req, file) => {
      const newName =
        new Date().getTime() + "_" + file.originalname.split(".")[0];
    },
  },
});

export const uploadCloud = multer({ storage });
