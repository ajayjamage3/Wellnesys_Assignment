const path = require('path')
const fs = require('fs');
const morgan = require('morgan')

const loggFile = fs.createWriteStream(path.join(__dirname, 'logBook.log'), { flags: 'a' })

const logger = morgan('combined', { stream: loggFile })

function errorHandler(err, req, res, next) {
    console.error(err.stack);
    res.status(500).send('Internal Server Error');
}

module.exports = {
    logger,errorHandler
}