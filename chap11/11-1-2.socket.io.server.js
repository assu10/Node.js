/*******************************
TITLE: 웹소켓 서버 생성 및 실행 socket.io, private 통신
AUTHOR: Assu
DATE: 2017.03.29
*******************************/
// 모듈 추출
var http = require('http');
var fs = require('fs');
var socketio = require('socket.io');

// 웹서버 생성
var server = http.createServer(function(req, res) {
    // HTMLPage.html 파일 읽기
    fs.readFile('11-1-1.HTMLPage.html', function(err, data) {
        res.writeHead(200, {'Content-Type': 'text/html'});
        res.end(data);
    });
}).listen(52273, function() {
    console.log('Server Running at http://127.0.0.1:52273');
});

// 소켓 서버 생성 및 실행
var id = 0;
var io = socketio.listen(server);
io.sockets.on('connection', function(socket) {
    // id 설정
    id = socket.id;

    socket.on('cliInput', function(data) {
        // private 통신
        io.sockets.to(id).emit('cliOutput', data);
    });
});
