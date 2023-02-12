const {createUser} = require("../../services/index");
const bcrypt = require("bcrypt");
const gravatar = require("gravatar");
const { v4 } = require("uuid");
const { sendMail } = require("../../helpers/index");

const HttpError = require("../../helpers/HttpError");

async function register(req, res, next) {
    const { email, password } = req.body;
  
    const salt = await bcrypt.genSalt();
    const hashedPassword = await bcrypt.hash(password, salt);
    try {
      const verificationToken = v4();
      const avatarURL = gravatar.url(email);
      const newUser = await createUser({
        email,
        password: hashedPassword,
        avatarURL,
        verificationToken,
        verify: false,
      });

      await sendMail({
        to: email,
        subject: "Please confirm your email",
        html: `<a href="localhost:3000/api/users/verify/${verificationToken}">Confirm your email</a>`,
      });

      return res.status(201).json(newUser);
    } catch (error) {
      if (error.message.includes("E11000 duplicate key error")) {
        throw new HttpError(409, "Email in use");
      }
      throw error;
    }
}

module.exports = {register};