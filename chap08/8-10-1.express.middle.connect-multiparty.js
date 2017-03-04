/*******************************
TITLE: connect-multiparty 미들웨어
AUTHOR: Assu
DATE: 2017.03.04
*******************************/
// 모듈 추출
var fs = require('fs');
var express = require('express');
var multipart = require('connect-multiparty');

// 서버 생성
var app = express();

// 미들웨어 설정
app.use(multipart({ uploadDir: __dirname + '/multipart' }));

// 라우터 설정
app.get('/', function(req, res) {
    fs.readFile('8-10-1.HTMLPage.html', function(err, data) {
        res.send(data.toString());
    });
});
app.post('/', function(req, res) {
    console.log(req.body);
    console.log(req.files);
    res.redirect('/');
});

// 서버 실행
app.listen(52273, function () {
  console.log('Server running at http://127.0.0.1:52273');
});
