/*******************************
TITLE: 라우팅 매개변수 추출
AUTHOR: Assu
DATE: 2017.03.04
*******************************/
// 모듈 추출
var express = require('express');

// 서버 생성
var app = express();

// 라우터 설정
app.get('/page/:id', function(req, res) {
    var name = req.params.id;
    res.send(name);
});

// 서버 실행
app.listen(52273, function () {
  console.log('Server running at http://127.0.0.1:52273');
});
