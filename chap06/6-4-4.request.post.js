/*******************************
TITLE: POST 요청 데이터 추출
       request 이벤트가 발생한 후 request 객체의 data 이벤트로 데이터가 전달됨.
AUTHOR: Assu
DATE: 2017.02.27
*******************************/
// 모듈 추출
var http = require('http');
var fs = require('fs');

// 모듈 사용
http.createServer(function(req, res) {

    if (req.method == 'GET') {
        // GET 요청이면 HTML 파일 제공
        fs.readFile('6-4-4.HTMLPage.html', function(err, data) {
            res.writeHead(200, {'Content-Type':'text/html'});
            res.end(data);
        });
    } else if (req.method == 'POST') {
        // POST 요청(submit)이면 요청 매개변수 출력
        req.on('data', function(dt) {
            res.writeHead(200, {'Content-Type':'text/html'});
            res.end(dt);
        });
    }
}).listen(52273, function() {
    console.log('Server Running at http://127.0.0.1:52273.');
});
