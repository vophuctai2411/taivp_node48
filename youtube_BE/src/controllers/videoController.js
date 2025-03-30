//import connect from "../../db.js"
import initModels from "../models/init-models.js";
import connect from "../models/connect.js";
import { formatVideoList } from "../utils/formatData.js";
//import { PrismaClient } from "@prisma/client/extension";

const models = initModels(connect);
//const prisma = new PrismaClient();

const createVideo = async (req, res) => {
  try {
    const queryString = `INSERT INTO videos(video_name, thumbnail, description) VALUES(?, ?, ?)`;
    let body = req.body;
    let { video_name, thumbnail, description } = body;
    const [data] = await connect.execute(queryString, [
      video_name,
      thumbnail,
      description,
    ]);
    return res.send(data);
  } catch (error) {
    res.send(error);
  }
};

const listVideo = async (req, res) => {
  try {
    const listVideos = await models.videos.findAll();
    const formatedVideos = formatVideoList(listVideos);
    return res.status(200).json(formatedVideos);
  } catch (error) {
    console.log(error);
    return res.status(500).json({ message: "List Video Error" });
  }
};

const getVideoType = async (req, res) => {
  try {
    const listVideoType = await models.video_types.findAll();
    return res.status(200).json(listVideoType);
  } catch (error) {
    console.log(error);
    return res.status(500).json({ message: "List Video Type Error" });
  }
};

const createVideoType = async (req, res) => {
  try {
    const { type_name } = req.body;
    const result = await models.video_types.create({
      type_name: type_name,
    });

    return res.status(200).json("ngon ngon");
  } catch (error) {
    return res.status(500).json(error);
  }
};

const updateVideo = async (req, res) => {
  try {
    const { videoId } = req.params;
    const { video_name } = req.body;

    console.log(videoId);

    const result = await models.videos.update(
      {
        video_name: video_name,
      },
      {
        where: {
          video_id: videoId,
        },
      }
    );

    console.log("Sau khi update: ", { result });

    return res.status(200).json("ngon ngon");
  } catch (error) {
    return res.status(500).json(error);
  }
};

const deleteVideo = async (req, res) => {
  try {
    const { videoId } = req.params;

    console.log(videoId);

    const result = await models.videos.destroy({
      where: {
        video_id: videoId,
      },
    });

    console.log("Sau khi delete: ", { result });

    return res.status(200).json("ngon ngon");
  } catch (error) {
    return res.status(500).json(error);
  }
};

export {
  createVideo,
  listVideo,
  getVideoType,
  createVideoType,
  updateVideo,
  deleteVideo,
};
