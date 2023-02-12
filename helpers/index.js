const nodemailer = require("nodemailer");
const EMAIL = process.env;
const PASSWORD = process.env;

async function sendMail(email, token) {
  const config = {
    host: "sandbox.smtp.mailtrap.io",
    port: 2525,
    secure: false,
    auth: {
      user: EMAIL,
      pass: PASSWORD,
    },
  };

  const transporter = nodemailer.createTransport(config);
  const emailOptions = {
    from: EMAIL,
    to: email,
    subject: "Email verification",
    text: `Hello! You have registered for service. To verify your email, follow the link /users/verify/${token}.`,
  };

  await transporter.sendMail(emailOptions);
}

function tryCatchWrapper(enpointFn) {
  return async (req, res, next) => {
    try {
      await enpointFn(req, res, next);
    } catch (error) {
      return next(error);
    }
  };
}
  
module.exports = { tryCatchWrapper, sendMail };