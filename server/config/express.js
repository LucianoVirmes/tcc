const express = require("express");
const bodyParser = require("body-parser");
const session = require('express-session');
const path = require('path');
const cors = require('cors');
const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.use(express.static(path.join(__dirname, 'public')));
app.use(session({ secret: 'passport-tutorial', cookie: { maxAge: 60000 }, resave: false, saveUninitialized: false }));



const corsOpts = {
    origin: '*',

    methods: [
    'GET',
    'POST',
    'PUT',
    'DELETE'
    ],

    allowedHeaders: [
    'Content-Type',
    ],
};

app.use(cors(corsOpts));

module.exports = app;