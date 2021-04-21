const axios = require('axios')

module.exports = axios.create({
  baseURL: process.env.JSON_SERVER_URL || "http://localhost:3000"
})
