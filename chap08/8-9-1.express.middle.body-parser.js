/*******************************
TITLE: body-parser 미들웨어
        express 모듈을 사용해 서버 생성
        cookie-parser, body-parser, router 미들웨어 추가
AUTHOR: Assu
DATE: 2017.03.04
*******************************/
// 모듈 추가
var fs = require('fs');
var express = require('express');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');

// 서버 생성
var app = express();

// 미들웨어 설정
app.use(cookieParser());
app.use(bodyParser.urlencoded({extended: false}));

// 라우터 설정
app.get('/', function(req, res) { });
app.get('/login', function(req, res) { });
app.post('/login', function(req, res) { });

// 서버 실행
app.listen(52273, function () {
  console.log('Server running at http://127.0.0.1:52273');
});
