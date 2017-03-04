/*******************************
TITLE: session 미들웨어
AUTHOR: Assu
DATE: 2017.03.04
*******************************/
// 모듈 추출
var express = require('express');
var session = require('express-session');

// 서버 생성
var app = express();

// 미들웨어 설정
app.use(session({
    secret: 'secret Key~',
    resave: false,
    saveUninitialize: true,
    cookie: {
        maxAge: 60*1000
    }
}));
app.use(function(req, res) {
    // 세션 저장
    req.session.now = (new Date().toUTCString());
    res.send(req.session);
});

// 서버 실행
app.listen(52273, function () {
  console.log('Server running at http://127.0.0.1:52273');
});
