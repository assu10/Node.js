/*******************************
TITLE: body-parser 미들웨어
        GET 방식일때는 HTML 페이지 출력하고,
        POST 방식일때는 클라이언트가 입력한 아이디와 비번 확인하여 auth 쿠키 생성
AUTHOR: Assu
DATE: 2017.03.04
*******************************/
// 모듈 추출
var fs = require('fs');
var express = require('express');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');

// 서버 생성
var app = express();

// 미들웨어 설정
app.use(cookieParser());
app.use(bodyParser.urlencoded({extended:false}));

// 라우더 설정
app.get('/', function(req, res) {
    if (req.cookies.auth) {
        res.send('Login Success');
    } else {
        res.redirect('/login');
    }
});
app.get('/login', function(req, res) {
    fs.readFile('8-9-1.login.html', function(err, data) {
        res.send(data.toString());
    });
});
app.post('/login', function(req, res) {
    // 쿠키 생성
    var login = req.body.login;     // body-parser 안쓰면 오류남
    var pwd = req.body.password;

    // 출력
    console.log(login, pwd);
    console.log(req.body);

    // 로그인 확인
    if (login == 'assu' && pwd == '1234') {
        res.cookie('auth', true);
        res.redirect('/');
    } else {
        res.redirect('/login');
    }
});

// 서버 실행
app.listen(52273, function () {
  console.log('Server running at http://127.0.0.1:52273');
});
