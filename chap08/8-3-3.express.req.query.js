/*******************************
TITLE: request 이벤트 리스너에서 요청 매개변수 추출
AUTHOR: Assu
DATE: 2017.03.04
*******************************/
// 모듈 추출
var express = require('express');

// 서버 생성
var app = express();

// 미들웨어 설정
app.use(function(req, res, next) {
    // 변수 선언
    var name = req.query.name;
    var region = req.query.region;

    // 응답
    res.send(name + '-' + region);
});

// 서버 실행
app.listen(52273, function () {
  console.log('Server running at http://127.0.0.1:52273');
});
