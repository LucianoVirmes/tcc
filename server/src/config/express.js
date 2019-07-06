

const express = require("express");
const bodyParser = require("body-parser");
const cors = require('cors');
const app = express();
app.use(bodyParser.urlencoded({extended: true}));
const corsOpts = {
    origin: '*',

    methods: [
    'GET',
    'POST',
    ],

    allowedHeaders: [
    'Content-Type',
    ],
};

app.use(cors(corsOpts));

module.exports = app;