/*******************************
TITLE: express 모듈에서 404 코드 전달
AUTHOR: Assu
DATE: 2017.03.04
*******************************/
// 모듈 추출
var express = require('express');

// 서버 생성
var app = express();

// 미들웨어 설정
app.use(function(req, res, next) {
    // 응답
    res.status(404).send('ERROR~');
});

// 서버 실행
app.listen(52273, function() {
    console.log('Server Running at http://127.0.0.1:52273');
});
