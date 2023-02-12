const {findUser} = require("../../services/index");
const bcrypt = require("bcrypt");

const jwt = require("jsonwebtoken");
const JWT_SECRET = process.env;

const HttpError = require("../../helpers/HttpError");

async function login(req, res, next) {
    const { email, password } = req.body;

    const isUserValid = await findUser({
        email,
    });

    if (!isUserValid) {
        throw new HttpError(401, "Email or password is wrong");
    }

    if (!isUserValid.verified) {
        throw new HttpError(
          401, "email is not verified. Please check your mail box"
        );
    }

    const isPasswordValid = await bcrypt.compare(password, isUserValid.password);

    if (!isPasswordValid) {
        throw new HttpError(401, "Email or password is wrong");
    }

    const payload = { id: isUserValid._id };

    const token = jwt.sign(payload, JWT_SECRET);
    
    return res.json({
        token,
        user: {
          email
        },
    });
}

module.exports = {login};