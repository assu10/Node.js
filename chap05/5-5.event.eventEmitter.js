/*******************************
TITLE: 이벤트 생성 (EventEmitter)
AUTHOR: Assu
DATE: 2017.02.17
*******************************/
// EventEmitter 객체 생성
var custom = new process.EventEmitter();

// 이벤트 연결
custom.on('tickAssu', function(code) {
    console.log('이벤트 실행~');
});

// 이벤트 강제 실행
custom.emit('tickAssu');
