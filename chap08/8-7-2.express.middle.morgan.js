/*******************************
TITLE: morgan 미들웨어의 토큰
AUTHOR: Assu
DATE: 2017.03.04
*******************************/
// 모듈 추출
var express = require('express');
var morgan = require('morgan');

// 서버 생성
var app = express();

// 미들웨어 설정
app.use(morgan(':method + :date'));     // 요청방식과 시간 출력
app.use(function(req, res) {
    res.send('express~');
});

// 서버 실행
app.listen(52273, function () {
  console.log('Server running at http://127.0.0.1:52273');
});
