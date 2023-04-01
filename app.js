const express = require('express')
require('dotenv').config()
const { StatusCodes } = require('http-status-codes')

const app = express();

// express middlewares
app.use(express.json());
app.use(express.urlencoded({extended: false}))

// default
// default route
app.get('/', (req, res) => {
    res.send('Mail Sender App');
})

require('./routes/main')(app)

const port = process.env.PORT || 3000;

const start = async () => {
    try { 
        app.listen(port, ()=> {
            console.log(`Listening on port: ${port}`)
        })
    }
    catch (error) {
        res.status(StatusCodes.INTERNAL_SERVER_ERROR).json(`An error occurred: ${error}`)
    }
}

start();

