import dotenv from "dotenv";

dotenv.config();

export const formatImageList = (listImages) => {
  return listImages.map((image) => ({
    ...image.toJSON(),
    thumbnail: `${process.env.BASE_URL}/public/images/${image.thumbnail}`,
    source: `${process.env.BASE_URL}/public/images/${image.source}`,
  }));
};
