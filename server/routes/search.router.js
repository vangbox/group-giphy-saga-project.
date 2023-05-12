const express = require('express');
const pool = require('../modules/pool');
const axios = require('axios');
const router = express.Router();
require('dotenv').config()

// const gifURL = `api.giphy.com/v1/gifs/search?api_key=${process.env.GIPHY_API_KEY}&q=${userQuery}s&limit=5`


router.get('/', (req, res) => {
    const userQuery = req.query.search;
    const gifURL = `http://api.giphy.com/v1/gifs/search?api_key=${process.env.GIPHY_API_KEY}&q=${userQuery}s&limit=5`
    axios({
        method: 'GET',
        url: gifURL
    }).then((response) => {
        res.send(response.data.data)
        console.log("Gifs:", response.data);
    }).catch((err) => {
        console.log("Error connecting with GIPHY API:", err);
    })

})

// vvvv How to use query params in a GET req from the client vvvv
// axios({
//     method: 'GET',
//     url: '/api/search?search=${userInput}'
// })
module.exports = router;