/*******************************
TITLE: 미들웨어를 사용한 속성 추가
AUTHOR: Assu
DATE: 2017.03.04
*******************************/
// 모듈 추출
var express = require('express');

// 서버 생성
var app = express();

// 미들웨어 설정
app.use(function(req, res, next) {
    // 데이터 추가
    req.number = 52;
    res.number = 273;
    next();
});

app.use(function(req, res, next) {
    // 응답
    res.send(req.number + ":" + res.number);
});

// 서버 실행
app.listen(52273, function () {
  console.log('Server running at http://127.0.0.1:52273');
});
