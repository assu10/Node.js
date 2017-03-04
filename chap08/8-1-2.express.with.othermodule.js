/*******************************
TITLE: 다른 모듈과 함께 사용할 때 서버 실행 코드
AUTHOR: Assu
DATE: 2017.03.04
*******************************/
var http = require('http');
var express = require('express');

// 서버 생성
var app = express();

// 서버 실행
http.createServer(app).listen(52273, function() {
    console.log('Server running at http://127.0.0.1:52273');
});
