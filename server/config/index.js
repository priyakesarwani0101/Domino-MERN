require('dotenv').config()

const config = {
    DB_CONNECTION_URL: process.env.DB_CONNECTION_URL,
    JWT_SECRET_KEY: process.env.JWT_SECRET_KEY,
    PORT: process.env.PORT
}

module.exports = config
