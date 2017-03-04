/*******************************
TITLE: router 모듈화
AUTHOR: Assu
DATE: 2017.03.04
*******************************/
var express = require('express');

// 서버 생성
var app = express();

// 라우터 생성
var routerA = express.Router();
var routerB = express.Router();

// 라우더A 설정
routerA.get('/index', function(req, res) {
    res.send('인덱스A');
});

// 라우더B 설정
routerB.get('/index', function(req, res) {
    res.send('인덱스B');
});

// 라우터 설정
app.use('/a', routerA);     // routerA는 /a/index 경로에 페이지 생성
app.use('/b', routerB);

// 서버 실행
app.listen(52273, function () {
  console.log('Server running at http://127.0.0.1:52273');
});
