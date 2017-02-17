/*******************************
TITLE: 이벤트 한번만 연결 (once)
AUTHOR: Assu
DATE: 2017.02.17
*******************************/

// process 객체에 uncaughtException 이벤트를 한번만 연결
process.once('uncaughtException', function(err) {
    console.log('예외다.');
});

// 2초 간격으로 예외 발생
var test = function() {
    setTimeout(test, 2000);
    fds();
};

setTimeout(test, 2000);
