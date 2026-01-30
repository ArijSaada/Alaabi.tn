var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/userInterface');
var admin = require('./routes/admin');
var ajouter = require('./routes/ajouter');
var modifier = require('./routes/modifier');
var supprimer = require('./routes/supprimer');
var app = express();


app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');
const port = process.env.PORT || 2000;
app.listen(port, () => {
  console.log(`Express server is running on port ${port}`);
});

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/userInterface', usersRouter);
app.use('/modifier', modifier);
app.use('/admin', admin);
app.use('/add', ajouter);
app.use('/admin',supprimer);

app.use(function(req, res, next) {
  next(createError(404));
});

app.use(function(err, req, res, next) {
  
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};
  
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
