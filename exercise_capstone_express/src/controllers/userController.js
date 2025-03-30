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

export { uploadAvatar, uploadMultipleImgs, uploadAvatarCloud };
