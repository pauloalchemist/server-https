const db = require('../database/connectionDb.js')

function insertUser (user) {
  return db.query('insert into test (name, email) values ($1, $2) returning *', [user.name, user.email])
}

module.exports = { insertUser }
