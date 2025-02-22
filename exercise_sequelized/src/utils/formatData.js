import dotenv from "dotenv";

dotenv.config();

export const formatVideoList = (listVideos)=> {
    return listVideos.map(video => ({
        ...video.toJSON(),
        thumbnail: `${process.env.BASE_URL}/public/images/${video.thumbnail}`,
        source: `${process.env.BASE_URL}/public/images/${video.source}`
    }))
}