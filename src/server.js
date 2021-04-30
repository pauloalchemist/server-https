import express from 'express'
import https from 'https'
import fs from 'fs'

const port = process.env.PORT || 8080

const cert = fs.readFileSync('./ssl/cert.pem')
const key = fs.readFileSync('./ssl/key.pem')

const app = express()
const server = https.createServer({ key: key, cert: cert }, app)

app.use(express.json())
app.get('/', (req, res) => {
  res.json({ Servidor: 'rodando' })
})

server.listen(port, () => {
  console.log(`Servidor ativo na porta ${port}!`)
})
