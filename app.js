
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
let loadAllById = require('./routes/loadAllById')
app.use('/loadAllById',loadAllById)
let generateOnlinePaper = require('./routes/generateOnlinePaper')
app.use('/generateOnlinePaper',generateOnlinePaper)
let loadAllPaper = require('./routes/loadAllPaper')
app.use('/loadAllPaper',loadAllPaper)
let loadPaper = require('./routes/loadPaper')
app.use('/loadPaper',loadPaper)
let searchPaper = require('./routes/searchPaper')
app.use('/searchPaper',searchPaper)
let searchPaperTime = require('./routes/searchPaperTime')
app.use('/searchPaperTime',searchPaperTime)
let getChapter = require('./routes/getChapter')
app.use('/getChapter',getChapter)
let uploadImg = require('./routes/uploadImg')
app.use('/uploadImg',uploadImg)
let getKnowledgePoint = require('./routes/getKnowledgePoint')
app.use('/getKnowledgePoint',getKnowledgePoint)
let saveAllRecord = require('./routes/saveAllRecord')
app.use('/saveAllRecord',saveAllRecord)
let searchPaperRecord = require('./routes/searchPaperRecord')
app.use('/searchPaperRecord',searchPaperRecord)
let searchAnsweredPaperRecord = require('./routes/searchAnsweredPaperRecord')
app.use('/searchAnsweredPaperRecord',searchAnsweredPaperRecord)
let searchRightAnswerRecord = require('./routes/searchRightAnswerRecord')
app.use('/searchRightAnswerRecord',searchRightAnswerRecord)
let searchWrongAnswerRecord = require('./routes/searchWrongAnswerRecord')
app.use('/searchWrongAnswerRecord',searchWrongAnswerRecord)
let saveSingleRecord = require('./routes/saveSingleRecord')
app.use('/saveSingleRecord',saveSingleRecord)
let random = require('./routes/random')
app.use('/random',random)
let loadAllStuResult = require('./routes/loadAllStuResult')
app.use('/loadAllStuResult',loadAllStuResult)
let register = require('./routes/register')
app.use('/register',register)
let searchstudent = require('./routes/searchstudent')
app.use('/searchstudent',searchstudent)
let deletestudent = require('./routes/deletestudent')
app.use('/deletestudent',deletestudent)
let searchSingleStudent = require('./routes/searchSingleStudent')
app.use('/searchSingleStudent',searchSingleStudent)
let addStudent = require('./routes/addStudent')
app.use('/addStudent',addStudent)
let teacherInit = require('./routes/teacherInit')
app.use('/teacherInit',teacherInit)
let searchteacher = require('./routes/searchteacher')
app.use('/searchteacher',searchteacher)
let studentInit = require('./routes/studentInit')
app.use('/studentInit',studentInit)
let addChapter = require('./routes/addChapter')
app.use('/addChapter',addChapter)
// var register = require('./routes/register')
// app.use('/register', register)

//end here


// start here
var http = require('http');
var server = http.createServer(app);
//  entry(app)
// end here


app.use(express.static(path.join(__dirname, 'public')));
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
