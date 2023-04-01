const mailRouter = require('./mail-sender')

module.exports = function(app) {
    app.use('/api/v1/mailsender', mailRouter);
}