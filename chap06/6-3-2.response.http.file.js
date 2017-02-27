/*******************************
TITLE: File System 모듈을 사용해 사용자에게 html 파일 제공 (서버 생성, 실행, html 파일 제공)
AUTHOR: Assu
DATE: 2017.02.23
*******************************/
// 모듈 추출
var fs = require('fs');
var http = require('http');

// 서버를 생성하고 실행
http.createServer(function(request, response) {
    // html파일 읽기
    fs.readFile('6-3-2.HTMLPage.html', function(error, data) {
        response.writeHead(200, {'Content-Type':'text/html'});
        response.end(data);
    });
}).listen(52273, function() {
    console.log('Server Running at http://127.0.0.1:52273');
});
