/*******************************
TITLE: 이벤트를 이용하는 부분 (EventEmitter 객체 이용)
AUTHOR: Assu
DATE: 2017.02.17
*******************************/

// 모듈 추출
var rint = require('./5-5.rint.js');

// 이벤트 연결
rint.timer.on('tickAssu', function(code) {
    console.log('이벤트 실행~');
});
