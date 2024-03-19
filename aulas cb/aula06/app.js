var express = require('express');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var app = express();

const produtosRouter = require('./routes/produtos');


app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

app.use('/produtos', produtosRouter);


module.exports = app;
