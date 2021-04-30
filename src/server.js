const express = require('express')
const https = require('https')
const fs = require('fs')
const { insertUser } = require('./data/createTest.js')

const port = process.env.PORT || 8080

const cert = fs.readFileSync('./ssl/cert.pem')
const key = fs.readFileSync('./ssl/key.pem')

const app = express()
const server = https.createServer({ key: key, cert: cert }, app)

app.use(express.json())
app.get('/', (req, res) => {
  res.json({ Servidor: 'rodando' })
})

app.post('/createuser', async (req, res) => {
  const user = req.body
  const newUser = await insertUser(user)
  res.status(201).json(newUser.rows)
})

server.listen(port, () => {
  console.log(`Servidor ativo na porta ${port}!`)
})
