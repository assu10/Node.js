/*******************************
TITLE: url 속성을 사용한 페이지 구분
AUTHOR: Assu
DATE: 2017.02.23
*******************************/
// 모듈 추출
var http = require('http');
var fs = require('fs');
var url = require('url');

// 서버 생성 및 실행
http.createServer(function(request, response) {
    var pathname = url.parse(request.url).pathname;

    // 페이지 구분
    if (pathname == '/') {
        // Index.html 파일을 읽어서 응답
        fs.readFile('6-4-1.Index.html', function(err, data) {
            response.writeHead(200, {'Content-Type':'text/html'});
            response.end(data);
        });
    } else if (pathname == '/OtherPage') {
        fs.readFile('6-4-1.OtherPage.html', function(err, data) {
            response.writeHead(200, {'Content-Type':'text/html'});
            response.end(data);
        });
    }

}).listen(52273, function() {
    console.log('Server Running at http://127.0.0.1:52273!');
});
