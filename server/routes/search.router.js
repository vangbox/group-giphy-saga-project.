const express = require('express');
const pool = require('../modules/pool');

const router = express.Router();
const GIPHY_API_KEY = require('dotenv').config()

const gifURL = `api.giphy.com/v1/gifs/search?api_key=${process.env.GIPHY_API_KEY}&q=${userQuery}s&limit=5`
const userQuery = '';

module.exports = router;