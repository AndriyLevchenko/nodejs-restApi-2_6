const { User } = require("../../models/users");
const { BadRequest } = require("http-errors");

async function verifyEmail(req, res, next) {
    const { token } = req.params;
    const user = await User.findOne({
        verificationToken: token,
    });
    if (!user) {
      throw BadRequest("Verify token is not valid!");
    }
    await User.findByIdAndUpdate(user._id, {
      verify: true,
      verificationToken: null,
    });
    return res.json({
      message: "Verification successful",
    });
}

module.exports = {verifyEmail};