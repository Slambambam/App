const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const morgan = require('morgan')
const app = express()
app.use(morgan('combined'))
app.use(bodyParser.json())
app.use(cors())
app.post('/register', (req, res) => {
  res.send({
    message: `Hello ${req.body.email} ! Your email was registered! Have fun!`
  })
})
app.post('/services', (req, res) => {
  res.send({
    message: 'Services API'
  })
})
app.post('/login', (req, res) => {
  res.send({
    message: 'Login API'
  })
})

app.listen(process.env.PORT || 8081)
