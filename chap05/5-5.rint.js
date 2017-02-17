/*******************************
TITLE: 이벤트를 생성하는 부분 (EventEmitter 객체 이용)
AUTHOR: Assu
DATE: 2017.02.17
*******************************/
// EventEmitter 겍체 생성
exports.timer = new process.EventEmitter();

// 이벤트 강제로 발생
setInterval(function() {
    exports.timer.emit('tickAssu');
}, 1000);
