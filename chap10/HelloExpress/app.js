/*******************************
TITLE: express 프레임워크 - 서버생성, 미들웨어 설정, 페이지 라우트, 모듈화, 페이지 렌더링
       http://firejune.io/express/guide
AUTHOR: Assu
DATE: 2017.03.22
*******************************/

// 외부 모듈 추출
var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var session = require('express-session');

// 사용자 정의 모듈 추출
var routes = require('./routes/index');
var users = require('./routes/users');

// 서버 생성
var app = express();

// 서버 설정 (view engine setup)
app.set('case sensitive routing', true);            // URL 대소분자 구분
app.set('views', path.join(__dirname, 'views'));    // 뷰 폴더 지정
app.set('view engine', 'jade');                     // 뷰 엔진 지정

// 미들웨어 설정
// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use(session({
    secret: 'secret key',
    resave: false,
    saveUninitialized: true
}));

// 라우터 미들웨어 설정
// app.use() : routes/users로 모듈화된 미들웨어 이용
app.use('/', routes);
app.use('/users', users);

// GET - /
app.get('/', routes);

// GET - /product
// view engine이 설정되어 있는 경우 확장자를 생략해도 되지만 다수의 템플릿 엔진을 혼합하여 사용하는 경우라면 product/index.jade 처럼 확장자 써주자.
app.get('/product', function(req, res) {
    res.render('product', {             // 'product/index' or 'product/index.jade'로 해도 상관없음
        title: 'Prodect Page'
    });
});

// GET - /product/insert
app.get('/product/insert', function(req, res) {
    res.render('product/insert', {
        title: 'Insert Page'
    });
});

// GET - /product/edit
app.get('/product/edit', function(req, res) {
    res.render('product/edit', {
        title: 'Edit Page'
    });
});

// 404 에러났을 때 메시지 출력
// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
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
