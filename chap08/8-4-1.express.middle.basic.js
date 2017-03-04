/*******************************
TITLE: 미들웨어 기본
AUTHOR: Assu
DATE: 2017.03.04
*******************************/
// 모듈 추출
var express = require('express');

// 서버 생성
var app = express();

// 미들웨어 설정 1
app.use(function(req, res, next) {
    console.log('첫 번째');
    next();
});

// 미들웨어 설정 2
app.use(function(req, res, next) {
    console.log('두 번째');
    next();
});

// 미들웨어 설정 3
app.use(function(req, res, next) {
    console.log('세 번째');
    res.writeHead(200, {'Content-Type':'text/html'});
    res.end('expess middleware~');
});

// 서버를 실행합니다.
app.listen(52273, function () {
  console.log('Server running at http://127.0.0.1:52273');
});
