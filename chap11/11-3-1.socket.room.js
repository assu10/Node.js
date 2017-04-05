/*******************************
TITLE: socket.io 모듈 - 방 만들기
        사용자에게 방 이름 입력받음 -> 방 이름을 join 이벤트와 함께 서버로 전달
            -> 버튼 클릭 시 message 이벤트 발생시키고 message 이벤트가 서버로부터 전달될 때 데이터를 body에 출력
AUTHOR: Assu
DATE: 2017.03.31
*******************************/
// 모듈 추출
var fs = require('fs');

// 서버 생성
var server = require('http').createServer();
var io = require('socket.io').listen(server);

// 서버 실행
server.listen(52273, function() {
    console.log('Server Running at http://127.0.0.1:52273');
});

// 웹서버 이벤트 연결
server.on('request', function(req, res) {
    fs.readFile('11-3-1.HTMLPage.html', function(err, data) {
        res.writeHead(200, {'Content-Type': 'text/html'});
        res.end(data);
    });
});

// 소켓 서버 이벤트 연결
io.sockets.on('connection', function(socket) {
    // 방이름
    var roomName = null;

    // join 이벤트 (클라이언트가 특정한 방에 접속하게 만드는 이벤트)
    // 브라우저를 private 모드로 하면 안된다.
    // 그리고 책 소스대로하면 잘 안됨.
    socket.on('join', function(data) {
        roomName = data;
        //socket.join(roomName);
        socket.join(roomName, function() {
            console.log('socket.rooms3 : ', socket.rooms);
            io.sockets.in(roomName).emit('message', 'test');
        });
    });

    // message 이벤트 (같은 방에 속한 클라이언트에 메시지를 전달하는 이벤트)
    socket.on('message', function(data) {
        console.log('roomName : ', roomName);
        io.sockets.in(roomName).emit('message', 'test');
        console.log('socket.rooms3 : ', socket.rooms);
    });
});
