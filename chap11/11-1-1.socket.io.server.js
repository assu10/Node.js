/*******************************
TITLE: 웹소켓 서버 생성 및 실행 socket.io, public/broadcast 통신
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
// listen() 메서드의 매개변수에는 웹 소켓 서버 포트 번호를 입력할 수 있지만
// 일반적으로 웹 서버와 함께 사용하므로 server 객체를 매개변수로 입력
var io = socketio.listen(server);

// io.sockets 객체에 connection 이벤트 연결,
// connection 이벤트는 클라이언트가 웹 소켓 서버에 접속할 때 발생함.
io.sockets.on('connection', function(socket) {
    // 클라이언트 input 이벤트 (cliInput)
    socket.on('cliInput', function(data) {
        // 클라이언트가 전송한 데이터 출력
        //console.log('Client send Data: ',data);

        // 클라이언트에 cliOutout 이벤트 발생시킴
        //socket.emit('cliOutout', data);

        // public 통신
        //io.sockets.emit('cliOutout', data);

        // broadcast 통신
        socket.broadcast.emit('cliOutput', data);
    });
});
