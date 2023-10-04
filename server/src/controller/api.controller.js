const express = require('express');
const { registrationUser, authorizationUser } = require('../service/api.service')
const { createToken } = require('../helper/jwt');
const api = express.Router()

api.post('/reg', async (req, res) => {
    try {
        const { name, surname, email, password } = req.body
        const result = await registrationUser(name, surname, email, password)
        const token = createToken(data);
        res.cookie('access_token', token, {
            httpOnly: false,
            secure: true,
        })
        res.send(result)
    } catch (err) {
        res.send(err.message)
    }
})

api.post('/auth', async (req, res) => {
    try {
        const { email, password } = req.body;
        const data = await authorizationUser(email, password)
        const token = createToken(data);
        res.cookie('access_token', token, {
            httpOnly: false,
            secure: true,
        })
        res.send(data);
    } catch (err) {
        res.send(err.message);
    }
})

module.exports = api;