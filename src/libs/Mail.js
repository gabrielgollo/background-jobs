const nodeMailer = require("nodemailer");
const config = require("../config/mail");
module.exports = nodeMailer.createTransport(config);
