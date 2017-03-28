/*******************************
TITLE: expesss 프레임워크 - ejs 모듈 레이어아웃
AUTHOR: Assu
DATE: 2017.03.27
*******************************/

// 외부 모듈 추출
var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');

// 사용자 정의 모듈 추출
var index = require('./routes/index');
var users = require('./routes/users');

// 서버 생성
var app = express();

// 서버 설정 (view engine setup)
app.set('views', path.join(__dirname, 'views'));    // 뷰 폴더 생성
app.set('view engine', 'ejs');                      // 뷰 엔진 설정

// 미들웨어 설정
// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

// 라우터 미들웨어 설정
//app.use('/', index);
//app.use('/users', users);

app.get('/', function(req, res) {
    res.render('index', {
        title: 'Index~'
    });
});

// 404 에러났을 때 메시지 출력
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// 에러 핸들러
// development 환경에서의 오류 처리
if (app.get('env') === 'development') {
    app.use(function(err, req, res, next) {
        res.status(err.status || 500);
        res.render('error', {
            message: err.message,
            error: err
        });
    });
}


// production 환경에서의 오류 처리
app.use(function(err, req, res, next) {
    res.status(err.status || 500);
    res.render('error', {
        message: err.message,
        error: {}
    });
});

// 모듈화
module.exports = app;
