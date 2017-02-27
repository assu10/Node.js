/*******************************
TITLE: Location 속성을 이용한 페이지 강제 이동
AUTHOR: Assu
DATE: 2017.02.23
*******************************/
// 모듈 추출
var http = require('http');

// 웹 서버 생성 및 실행
http.createServer(function(request, response) {
    //response.writeHead(302, {'Location':'http://www.naver.com'});
    response.writeHead(404);
    response.end();
}).listen(52273, function() {
    console.log('Server Running at http://127.0.0.1:52273~');
});
