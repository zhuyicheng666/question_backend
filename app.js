
require('babel-register')
import entry from './routes/entry'
var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');

var app = express();
//设置跨域访问

var cors = require('cors');
app.use(cors());
// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);


//start here
var getArticleList = require('./routes/login')
app.use('/login', getArticleList)
let commit = require('./routes/commit')
app.use('/commit',commit)
let loadAll = require('./routes/loadAll')
app.use('/loadAll',loadAll)
// var register = require('./routes/register')
// app.use('/register', register)

//end here


// start here
var http = require('http');
var server = http.createServer(app);
//  entry(app)
// end here



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


server.listen('3000');
