var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var articleRouter = require('./routes/article');


var app = express();

// app.connection = connection;
// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/article', articleRouter);

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



// const ws = require("nodejs-websocket")
//
// const PORT=3001
// const server =ws.createServer(connect=>{
//   console.log('有用户连接上来了');
//   connect.on('text',data=>{
//     console.log('接受了用户得数据',data);
//     connect.send(data.toUpperCase()+"!!!")
//   })
//   connect.on('close',()=>{
//     console.log('连接断开了');
//
//   })
//   connect.on('error',()=>{
//     console.log('连接异常');
//
//   })
//
// })
// server.listen(PORT,()=>{
//   console.log('websocket服务启动成功了，监听了端口'+PORT);
// })
