/*******************************
TITLE: 간단한 응답 메시지 작성
AUTHOR: Assu
DATE: 2017.02.23
*******************************/
// 웹 서버를 생성하고 실행
require('http').createServer(function(request, response) {
    // 응답
    response.writeHead(200, {'Content-Type': 'text/html'});     // 응답 헤더
    response.end('<h1>hello?</h1>');                            // 응답 본문
}).listen(52273, function() {
    console.log('Server Running at http://127.0.0.1:52273~');
});
