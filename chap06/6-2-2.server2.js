/*******************************
TITLE: server 객체의 close() 메소드
AUTHOR: Assu
DATE: 2017.02.20
*******************************/
// 서버 생성
var server = require('http').createServer();

// 서버 실행
server.listen(52273, function() {
    console.log('Server Running at http://127.0.0.1:52273');
});

// 10초 후 함수 실행
var test = function() {
    // 서버 종료
    server.close();
};
setTimeout(test, 10000);
