import express from 'express';
import { createVideo, listVideo, updateVideo, deleteVideo, getVideoType, createVideoType } from '../controllers/videoController.js';

const videoRoutes = express.Router();
videoRoutes.post("/create-video", createVideo)
videoRoutes.get("/list-video", listVideo)
videoRoutes.get("/get-video-types", getVideoType)
videoRoutes.put("/update-video/:videoId", updateVideo)
videoRoutes.delete("/delete-video/:videoId", deleteVideo)
videoRoutes.post("/create-video-type", createVideoType)

export default videoRoutes