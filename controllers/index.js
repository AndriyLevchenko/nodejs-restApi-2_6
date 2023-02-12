const { updateContactService } = require("./contacts/updateContactService");
const { removeContactService } = require("./contacts/removeContactService");
const { createContactService } = require("./contacts/createContactService");
const { getContactService } = require("./contacts/getContactService");
const { getContactsService } = require("./contacts/getContactsService");
const { updateStatusContactService } = require("./contacts/updateStatusContactService");
const { current } = require("./user/current");
const { logout } = require("./user/logout");
const { updateSubscription } = require("./user/updateSubscription");
const { uploadImageAvatar } = require("./user/uploadImageAvatar");
const { verifyEmail } = require("./user/verifyEmail");
const { resendVerifyEmail } = require("./user/resendVerifyEmail");
const { register } = require("./auth/register");
const { login } = require("./auth/login");

module.exports = {
    updateContactService,
    removeContactService,
    createContactService,
    getContactService,
    getContactsService,
    updateStatusContactService,
    current,
    logout,
    updateSubscription,
    uploadImageAvatar,
    verifyEmail,
    resendVerifyEmail,
    register,
    login,
};