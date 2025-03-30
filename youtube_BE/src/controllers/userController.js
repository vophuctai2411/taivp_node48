import connect from "../../db.js";

async function getUsers(req, res) {
  try {
    const [data] = await connect.query(`
        SELECT * FROM users
    `);
    return res.send(data);
  } catch (error) {
    return res.send(`Error: ${error}`);
  }
}

async function createUser(req, res) {
  try {
    const queryString = `INSERT INTO users (full_name, email, pass_word) VALUES
        (?, ?, ?)`;
    const body = req.body;
    const { full_name, email, pass_word } = body;
    const [data] = await connect.execute(queryString, [
      full_name,
      email,
      pass_word,
    ]);

    return res.send(data);
  } catch (error) {
    return res.send(`Error: ${error}`);
  }
}

const uploadAvatar = async (req, res) => {
  try {
    let file = req.file;
    return res.status(200).json(file);
  } catch (error) {
    return res.status(500).json({ message: "Error upload avatar" });
  }
};

const uploadMultipleImgs = async (req, res) => {
  try {
    let files = req.files;
    return res.status(200).json(files);
  } catch (error) {
    return res.status(500).json({ message: "Error upload multiple images" });
  }
};

const uploadAvatarCloud = async (req, res) => {
  try {
    let file = req.file;
    return res.status(200).json(file);
  } catch (error) {
    return res.status(500);
  }
};

export {
  getUsers,
  createUser,
  uploadAvatar,
  uploadMultipleImgs,
  uploadAvatarCloud,
};
