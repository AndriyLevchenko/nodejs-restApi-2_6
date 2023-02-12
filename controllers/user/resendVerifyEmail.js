const { User } = require("../../models/users");
const { BadRequest } = require("http-errors");
// const { sendMail } = require("../helpers/index");

async function resendVerifyEmail(req, res, next) {
    const { email } = req.body;
  
    if (!email) {
      return next(HttpError(400, "Missing required field email"));
    }
  
    const user = await User.findOne({
      email,
    });
  
    if (user.verify) {
      throw BadRequest("Verification has already been passed");
    }
  
    try {
      await sendMail({
        to: email,
        subject: "Verification email sent",
        html: `<a href="localhost:3000/api/users/verify/${user.verificationToken}">Confirm your email</a>`,
      });
  
      return res.json({
        message: "Verification email sent",
      });
    } catch (error) {
      console.error(error.message);
    }
}

module.exports = {resendVerifyEmail};