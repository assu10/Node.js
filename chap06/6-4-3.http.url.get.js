/*******************************
TITLE: GET 요쳥 매개변수 추출
AUTHOR: Assu
DATE: 2017.02.26
*******************************/
// 모듈 추출
var http = require('http');
var url = require('url');

// 모듈 사용
http.createServer(function(req, res) {
    // 모듈 사용
    var query = url.parse(req.url, true).query;

    // GET 요청 매개변수 출력
    res.writeHead(200, {'Content-Type':'text/html'});
    res.end(JSON.stringify(query));
}).listen(52273, function() {
    console.log('Server Running at 127.0.0.1:52273~');
});
