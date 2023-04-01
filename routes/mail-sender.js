const express = require('express')
const { emailUser } = require('../controller/mail-sender')
const mailRouter = express.Router();

mailRouter.route('/sendEmail').post(emailUser);

module.exports = mailRouter