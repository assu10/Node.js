/*******************************
TITLE: server 객체의 이벤트 연결
AUTHOR: Assu
DATE: 2017.02.20
*******************************/
// 모듈 추출
var http = require('http');

// server 객체 생성
var server = http.createServer();

// server 객체에 이벤트 연결
server.on('request', function(code) {
    console.log('Request On');
});

server.on('connection', function(code) {
    console.log('Connection On');
});

server.on('close', function(code) {
    console.log('Close On');
});

// listen() 메서드 실행
server.listen(52273);
