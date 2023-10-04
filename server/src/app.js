const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const userRouter = require('./controller/user.controller')
const api = require('../src/controller/api.controller');
const product = require('../src/controller/products.controller')
const cookieParser = require('cookie-parser')

const app = express()

app.use(cors({ origin: "http://localhost:3000", credentials: true }))
app.use(bodyParser.json())
app.use(cookieParser())

app.use('/user', userRouter)
app.use('/api', api);
app.use('/product', product)

app.use((err, req, res, next) => res.send(err.message))

module.exports = app