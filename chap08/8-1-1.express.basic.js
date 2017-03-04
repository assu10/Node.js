/*******************************
TITLE: express 모듈을 사용한 서버 생성 및 실행
AUTHOR: Assu
DATE: 2017.03.04
*******************************/
var express = require('express');

// 서버 생성
var app = express();

// request 이벤트 리스너 설정
app.use(function(req, res) {
    res.writeHead(200, {'Content-Type':'text/html'});
    res.end('Hello express.');
});

// 서버 실행
app.listen(52273, function() {
    console.log("Server Running at http://127.0.0.1:52273");
});
