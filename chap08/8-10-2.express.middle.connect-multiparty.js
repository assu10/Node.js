/*******************************
TITLE: connect-multiparty 미들웨어
        이미지 파일인지 확인하고 rename() 메서드를 사용해 시간을 기반으로 파일 이름 변경
        이미지 파일이 아니면 파일 제거
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
var multipartMiddleware = multipart({ uploadDir: __dirname + '/multipart' });

// 라우터 설정
app.get('/', function(req, res) {
    fs.readFile('8-10-1.HTMLPage.html', function(err, data) {
        res.send(data.toString());
    });
});
// 일반적으로 morgan, cookie-parser 미들웨어 등은 거의 모든 페이지에서 활용하므로 전역적으로 사용하는 경우가 많은데
// 파일업로드기능은 일부 페이지에서만 수행될 가능성이 높다.
// 이런 기능은 해당 페이지 라우팅에만 적용하는 것이 좋다.
app.post('/', multipartMiddleware, function(req, res) {
    var comment = req.body.comment;
    var imageFile = req.files.image;
    if (imageFile) {
        var name = imageFile.name;
        var path = imageFile.path;
        var type = imageFile.type;
        // 이미지 파일인지 확인
        if (type.indexOf('image') != -1) {
            // 파일 이름 변경
            var outputPath = __dirname + '/multipart/' + Date.now() + '_' + name;
            fs.rename(path, outputPath, function(err) {
                res.redirect('/');
            });
        } else {
            // 이미지 파일이 아니면 파일 제거
            fs.unlink(path, function(err) {
                res.sendStatus(400);        // Bad Request
            });
        }
    } else {
        // 파일이 없을 경우
        res.sendStatus(404);
    }
});

// 서버 실행
app.listen(52273, function () {
  console.log('Server running at http://127.0.0.1:52273');
});
