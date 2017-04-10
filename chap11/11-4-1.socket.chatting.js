/*******************************
TITLE: 웹에서 모바일채팅 구현 - 웹채팅 서버
AUTHOR: Assu
DATE: 2017.04.05
*******************************/
// 모듈 추출
var http = require('http');
var fs = require('fs');
var socketio = require('socket.io');
var mysql = require('mysql');

// 데이터베이스와 연결
var client = mysql.createConnection({
    user:'root',
    password:'1234',
    database:'company'
});

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
    // 방이름
    var roomNm = null;

    // join 이벤트 (클라이언트가 특정한 방에 접속하게 만드는 이벤트)
    // 방에 접속시키고 현재 방의 이름을 리턴
    socket.on('join', function(data) {
        roomNm = data;
        socket.join(roomNm, function() {
            console.log('socket.rooms : ', socket.rooms);
            io.sockets.in(roomNm).emit('moveChat', roomNm);
        });
    });

    // messageAssu 이벤트
    socket.on('messageAssu', function(data) {
        // 대화내용 저장
        client.query('INSERT INTO CHAT (ROOMNM, NAME, MSG, DATE) VALUES (?, ?, ?, ?)', [
            data.roomNm, data.name, data.message, new Date()
        ]);

        // 현재 접속해있는 모든 소켓에게 이벤트 전달 ()클라이언트의 messageAssu 이벤트 발생새킴)
        io.sockets.in(data.roomNm).emit('messageAssu', data);
    });
});
