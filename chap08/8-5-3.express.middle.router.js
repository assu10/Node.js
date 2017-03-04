/*******************************
TITLE: 전체 선택자를 사용하는 라우터 메서드
AUTHOR: Assu
DATE: 2017.03.04
*******************************/
// 모듈 추출
var express = require('express');

// 서버 생성
var app = express();

// 라우터 설정
app.get('/index', function(req, res) {
    res.send('인덱스');
});
app.get('*', function(req, res) {
    res.status(404).send('ERROR');
});

// 서버 실행
app.listen(52273, function () {
  console.log('Server running at http://127.0.0.1:52273');
});
