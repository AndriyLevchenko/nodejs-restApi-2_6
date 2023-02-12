const { current } = require("./current");
const { logout } = require("./logout");
const { updateSubscription } = require("./updateSubscription");
const { uploadImageAvatar } = require("./uploadImageAvatar");
const { verifyEmail } = require("./verifyEmail");
const { resendVerifyEmail } = require("./resendVerifyEmail");

module.exports = {
    current,
    logout,
    updateSubscription,
    uploadImageAvatar,
    verifyEmail,
    resendVerifyEmail,
};