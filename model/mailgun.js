require('dotenv').config()
const formData = require('form-data');
const Mailgun = require('mailgun.js');
const mailgun = new Mailgun(formData);
const mg = mailgun.client({username: 'api', key: process.env.MAILGUN_API_KEY});
const domain = process.env.MAILGUN_DOMAIN
const fromEmail = process.env.MAILGUN_FROM_EMAIL

const sendEmail = async (to, subject, body) => {
    await mg.messages.create(domain, {
        from: fromEmail,
        to: [to],
        subject: subject,
        html: body
      })
      .then(msg => console.log(msg)) // logs response data
      .catch(err => console.error(err)); // logs any error
}

module.exports = sendEmail