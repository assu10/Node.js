/*******************************
TITLE: file System 모듈을 사용해 이미지와 음악 파일 제공
AUTHOR: Assu
DATE: 2017.02.23
*******************************/
// 모듈 추출
var fs = require('fs');
var http = require('http');

// 52273 포트에 서버 생성하고 실행 (이미지 파일 제공)
http.createServer(function(request, response) {
    fs.readFile('pic.jpg', function(err, data) {
        response.writeHead(200, {'Content-Type':'image/jpg'});
        response.end(data);
    });
}).listen(52273, function() {
    console.log('Server Running at http://127.0.0.1:52273');
});

// 52274 포트에 서버 생성하고 실행 (음악 파일 제공)
http.createServer(function(request, response) {
    fs.readFile('Kalimba.mp3', function(err, data) {
        response.writeHead(200, {'Content-Type':'audio/mp3'});
        response.end(data);
    });
}).listen(52274, function() {
    console.log('Server Running at http://127.0.0.1:52274');
});
