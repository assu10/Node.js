/*******************************
TITLE: 웹 서버 생성과 실행
AUTHOR: Assu
DATE: 2017.02.20
*******************************/
// 모듈 추출
var http = require('http');

// 웹 서버 생성
var server = http.createServer();

// 웹 서버 실행
server.listen(52273);
