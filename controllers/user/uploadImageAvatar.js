const fs = require("fs/promises");
const Jimp = require("jimp");
const { User } = require("../../models/users");

async function uploadImageAvatar (req, res) {
  const { path } = req.file;
  const { _id } = req.user;

  const newName = `${_id}-avatar.jpg`;
  const avatarUrl = `/avatars/${newName}`;

  const avatar = await Jimp.read(path);
  await avatar
    .resize(250, 250)
    .quality(60)
    .write(`./public/avatars/${newName}`);

  await fs.remove(path);
  await User.findByIdAndUpdate(_id, { $set: { avatarURL: avatarUrl } });

  res.json({ avatarURL: url });
};

module.exports = {uploadImageAvatar};