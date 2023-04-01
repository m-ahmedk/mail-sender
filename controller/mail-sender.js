var fs = require('fs');
const path = require('path');
const { StatusCodes } = require('http-status-codes')
const sendEmail = require('../model/mailgun')
const isEmpty = require('../util/required-fields')

const emailUser = async (req, res) => {
    try {
        let { email } = req.body;
        console.log(email)
        if (!email || !email.trim()) {
            res.status(StatusCodes.BAD_REQUEST).json(`Email is invalid or empty..`)
        }

        var emailBody = fs.readFileSync(path.join(__dirname, '../public/html/sample.html')).toString();
        await sendEmail(email, `You have received an email`, emailBody);

        res.status(StatusCodes.OK).json(`Email is sent to ${email}`)
    }
    catch (err) {
        res.status(StatusCodes.INTERNAL_SERVER_ERROR).json(`An error occurred: ${err}`);
    }
}


module.exports = { emailUser }