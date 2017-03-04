/*******************************
TITLE: static 미들웨어
AUTHOR: Assu
DATE: 2017.03.04
*******************************/
// 모듈 추출
var express = require('express');

// 서버 생성
var app = express();

// 미들웨어 설정
app.use(express.static(__dirname + '/public'));
app.use(function(req, res) {
    res.writeHead(200, {'Content-Type':'text/html'});
    res.end('<img src="/testpicture.jpg" />');
});

// 서버 실행
app.listen(52273, function () {
  console.log('Server running at http://127.0.0.1:52273');
});
