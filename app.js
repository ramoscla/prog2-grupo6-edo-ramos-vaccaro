//require express sesion

const session = require('express-session');

var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var db = require('./database/models');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var productRouter = require('./routes/product');


var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

//session

app.use(function(req, res, next) {
  if (req.session.user != undefined) {
    res.locals.user = req.session.user;
  }
  return next();
}
);

app.use(function(req, res, next) {
  if (req.cookies.usuario_id != undefined && req.session.user == undefined) {
    let idUsuario = req.cookies.usuario_id;
    db.Usuario.findByPk(idUsuario)
    .then((result) => { 
      req.session.user = result;
      req.locals.user = result;
      return next();
    })
    .catch ((error) => {
      return console.log(error);
    });
  } else {
  return next();
  }
}

);
app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/product', productRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
