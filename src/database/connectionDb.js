import { Client } from 'pg'
require('dotenv').config()

const db = new Client({
  connectionString: process.env.DATABASE_URL
})

db.connect()
  .then(() => console.log('Database connected with success!'))
  .catch(err => console.error('Connection database error', err.stack))

const query = (text, params) => db.query(text, params)

export { query }
