var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');

// var index = require('./routes/app'); change1
var appRoutes = require('./routes/app');
// var users = require('./routes/users'); change2

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use(function(err, req, res, next) { //change7 new added for angular
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Origin', 'Origin, x-Requested-with, Content-Type, Accept');
  res.setHeader('Access-Control-Allow-Origin', 'POST, GET, PATCH, DELETE, OPTIONS');
  next();
});
// app.use('/', index); //change6
app.use('/', appRoutes);

// app.use('/users', users); change5

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  // var err = new Error('Not Found'); change4
  // err.status = 404;
  // next(err);
    res.render('index');
});

// // error handler  change3
// app.use(function(err, req, res, next) {
//   // set locals, only providing error in development
//   res.locals.message = err.message;
//   res.locals.error = req.app.get('env') === 'development' ? err : {};
//
//   // render the error page
//   res.status(err.status || 500);
//   res.render('error');
// });

module.exports = app;
