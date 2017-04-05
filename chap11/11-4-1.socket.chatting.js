/*******************************
TITLE: 웹에서 모바일채팅 구현 - 웹채팅 서버
AUTHOR: Assu
DATE: 2017.04.05
*******************************/
// 모듈 추출
var http = require('http');
var fs = require('fs');
var socketio = require('socket.io');

// http 모듈 이용하여 웹서버 생성
var server = http.createServer(function(req, res) {
    fs.readFile('11-4-1.HTMLPage.html', function(err, data) {
        res.writeHead(200, {'Content-Type':'text/html'});
        res.end(data);
    });
}).listen(52273, function() {
    console.log('Server Running at http://127.0.0.1:52273.');
});

// socket.io 모듈로 소켓서버 생성
var io = socketio.listen(server);
io.sockets.on('connection', function(socket) {
    // messageAssu 이벤트
    socket.on('messageAssu', function(data) {
        // 현재 접속해있는 모든 소켓에게 이벤트 전달 ()클라이언트의 messageAssu 이벤트 발생새킴)
        io.sockets.emit('messageAssu', data);
    });
});
