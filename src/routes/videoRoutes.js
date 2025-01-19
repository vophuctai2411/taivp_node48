import express from 'express';
import { createVideo } from '../controllers/videoController.js';

const videoRoutes = express.Router();
videoRoutes.post("/create-video", createVideo)

export default videoRoutes