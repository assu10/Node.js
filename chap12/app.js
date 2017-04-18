/*******************************
TITLE: 실시간 영화예매
AUTHOR: Assu
DATE: 2017.04.10
*******************************/
// 모듈 추출
var socketio = require('socket.io');
var express = require('express');
var http = require('http');
var fs = require('fs');

// 0:빈좌석, 1:예약가능한좌석, 2:예약완료된좌석
var seats = [
    [1, 1, 0, 1, 1, 0, 0, 0, 0, 1, 1, 0, 1, 1],
    [1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1],
    [1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1],
    [1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1],
    [1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1],
    [1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1],
    [1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1],
    [1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1],
    [1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1],
    [1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1],
    [1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1],
    [1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1],
];

// 웹 서버 생성
var app = express();
var server = http.createServer(app);

// 라우트 수행
app.get('/', function(req, res, next) {
    fs.readFile('HTMLPage.html', function(err, data) {
        res.send(data.toString());
    });
});

app.get('/seats', function(req, res, next) {
    // 클라이언트 페이지에서 Ajax를 사용해 변수 seats를 화면에 출력할 것이므로 변수 seats를 JSON 형태로 제공
    res.send(seats);
});

// 웹 서버 실행
server.listen(52273, function() {
    console.log('Server Running at http://127.0.0.1:52273~');
});


// 소켓 서버 생성 및 실행
var io = socketio.listen(server);
io.sockets.on('connection', function(socket) {
    // 예약 이벤트
    socket.on('reserve', function(data) {
        seats[data.y][data.x] = 2;
        io.sockets.emit('reserve', data);
    });

    // 취소 이벤트
    socket.on('cancel', function(data) {
        seats[data.y][data.x] = 1;
        io.sockets.emit('cancel', data);
    });
});
