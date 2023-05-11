const express = require('express');
const pool = require('../modules/pool');
const axios = require('axios');
const router = express.Router();
const GIPHY_API_KEY = require('dotenv').config()

const gifURL = `api.giphy.com/v1/gifs/search?api_key=${process.env.GIPHY_API_KEY}&q=${userQuery}s&limit=5`
const userQuery = '';

router.get('/', (req, res) => {
    req.body

})

// vvvv How to use query params in a GET req from the client vvvv
// axios({
//     method: 'GET',
//     url: '/api/search?search=${userInput}'
// })
module.exports = router;