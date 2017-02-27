/*******************************
TITLE: request 객체의 method 속성을 사용한 페이지 구분
AUTHOR: Assu
DATE: 2017.02.23
*******************************/
// 모듈 추출
var http = require('http');

// 모듈 사용
http.createServer(function(request, response) {
    if (request.method == 'GET') {
        console.log('GET~');
    } else if (request.method == 'POST') {
        console.log('POST~');
    }
}).listen(52273, function() {
    console.log('Server Running at http://127.0.0.1:52273');
});
