import connect from "../../db.js"

const createVideo = async (req, res) => {
    try{
    const queryString =`INSERT INTO videos(video_name, thumbnail, description) VALUES(?, ?, ?)`
    let body =req.body;
    let {video_name, thumbnail, description} = body;
    const [data] = await connect.execute(queryString, [video_name, thumbnail, description]);
    return res.send(data)
    } catch(error) {
        res.send(error)
    }
}

export {createVideo}