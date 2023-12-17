const Pool = require('pg').Pool
const dotenv = require('dotenv')
dotenv.config()

const data = {
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  host: process.env.DB_URL,
  port: process.env.DB_PORT,
  database: 'postgres_react_todoapp'
}

const pool = new Pool(data)

module.exports = pool 