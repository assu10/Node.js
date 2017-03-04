/*******************************
TITLE: 라우터 모듈의 활용
AUTHOR: Assu
DATE: 2017.03.04
*******************************/
// 모둘 추출
var express = require('express');

// 서버 생성
var app = express();
app.use('/a', require('./8-5-5.routerA').router);
app.use('/b', require('./8-5-5.routerA').router);
app.use('/c', require('./8-5-5.routerA').router);

// 서버 실행
app.listen(52273, function () {
  console.log('Server running at http://127.0.0.1:52273');
});
