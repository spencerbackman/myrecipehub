const express = require('express');
const app = express();
require("dotenv").config();
const expressJwt = require("express-jwt");
const morgan = require('morgan');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

app.use(bodyParser.json());
app.use(morgan('dev'));

app.use('/recipe', expressJwt({secret: process.env.SECRET}));
app.use('/profile', expressJwt({secret: process.env.SECRET}));

app.use('/recipe', require('./routes/recipe'));
app.use('/auth', require('./routes/auth'));
app.use('/profile', require('./routes/profile'))

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost/recipe-database', (err) => {
    if (err) console.log(err);
    console.log('connected to the database');
})


app.listen(5050, () => {
    console.log('server is running on port 5050')
})