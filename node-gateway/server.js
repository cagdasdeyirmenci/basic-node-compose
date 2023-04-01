'use strict';
const axios = require("axios")
const express = require('express');

const URL1 = process.env.URL1
const PORT1 = process.env.PORT1
const URL2 = process.env.URL2
const PORT2 = process.env.PORT2

// Constants
const PORT = 8080;
const HOST = '0.0.0.0';

// App
const app = express();

app.get('/', (req, res) => {
    res.send('Hello node gateway');
});

app.get('/1', async (req, res) => {
    const response = await axios.get(`http://${URL1}:${PORT1}`)
    res.send(response.data);
});

app.get('/2', async (req, res) => {
    const response = await axios.get(`http://${URL2}:${PORT2}`)
    res.send(response.data);
});

app.listen(PORT, HOST, () => {
    console.log(`node gateway Running on http://${HOST}:${PORT}`);
});