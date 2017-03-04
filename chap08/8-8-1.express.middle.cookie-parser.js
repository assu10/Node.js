/*******************************
TITLE: cookie-parser 미들웨어를 사용한 쿠키 추출
AUTHOR: Assu
DATE: 2017.03.04
*******************************/
// 모듈 추출
var express = require('express');
var cookieParser = require('cookie-parser');

// 서버 생성
var app = express();

// 미들웨어 설정
app.use(cookieParser());

// 라우더 설정
app.get('/getCookie', function(req, res) {
    res.send(req.cookies);
});
app.get('/setCookie', function(req, res) {
    // 쿠키 생성
    res.cookie('string', 'assuCookie', {
        maxAge:6000,
        secure:true
    });
    res.cookie('json', {
        name:'cookie',
        property:'delicious'
    });
    res.redirect('/getCookie');
});

/*
http.createServer(function (request, response) {
    // 쿠키 입력
    response.writeHead(200, {
        'Content-Type': 'text/html',
        'Set-Cookie': [
            'breakfast = toast, Expires = ' + date.toUTCString(),
            'dinner = chicken'
        ]
    });
    // 쿠키 출력
    response.end(request.headers.cookie);
}
*/

// 서버 실행
app.listen(52273, function () {
  console.log('Server running at http://127.0.0.1:52273');
});
