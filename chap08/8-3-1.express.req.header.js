/*******************************
TITLE: express 모듈의 request 이벤트 리스너의 header() 메서드 사용하여 요청헤더에서 속성 추출
AUTHOR: Assu
DATE: 2017.03.04
*******************************/
// 모듈 추출
var express = require('express');

var app = express();

// 미들웨어 설정
app.use(function(req, res) {
    // User-Agent 속성 추출
    var agent = req.header('User-Agent');
    console.log(req.headers);
    console.log(agent);

    // 응답, 상태코드만 보낼 때는 sendStatus() 메서드 사용
    res.sendStatus(200);
});

// 서버 실행
app.listen(52273, function() {
     console.log('Server running at http://127.0.0.1:52273');
});
