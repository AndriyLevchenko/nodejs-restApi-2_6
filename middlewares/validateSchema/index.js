const { validateBody } = require("../validateSchema/validateBody");
const { auth } = require("../validateSchema/auth");
const { upload } = require("../validateSchema/upload");

module.exports = {
    validateBody,
    auth,
    upload,
  };