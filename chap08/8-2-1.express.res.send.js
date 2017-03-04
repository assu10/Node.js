/*******************************
TITLE: express 모듈의 response 이벤트 리스너의 send() 메서드
AUTHOR: Assu
DATE: 2017.03.04
*******************************/
// 모듈 추출
var express = require('express');

// 서버 생성
var app = express();

// request 이벤트 리스터 설정
app.use(function(req, res) {
    // 데이터 생성
    var output = [];
    for (var i=0; i<3; i++) {
        output.push({
            count:1,
            name:'name - ' + i
        });
    }
    // 응답
    res.send(output);
});

// 서버 실행
app.listen(52273, function() {
    console.log('Server Running at http://127.0.0.1:52273');
});
