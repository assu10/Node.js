/*******************************
TITLE: request 이벤트 리스너에서 요청헤더에서 속성 추출, User-Agent 속성에 따른 응답
AUTHOR: Assu
DATE: 2017.03.04
*******************************/
// 모듈 추출
var express = require('express');

// 서버 생성
var app = express();

// 미들웨어 설정
app.use(function(req, res) {
    // User-Agent 속성 추출
    var agent = req.header('User-Agent');

    // 브라우저 구분
    if (agent.toLowerCase().match(/chrome/)) {
        // 응답
        res.send('Chrome~');
    } else {
        res.send('Express~');
    }
});

// 서버 실행
// 서버를 실행합니다.
app.listen(52273, function () {
  console.log('Server running at http://127.0.0.1:52273');
});
