/*******************************
TITLE: 이벤트 연결
    uncaughtException : 예외가 발생할 때 실행되는 이벤트
AUTHOR: Assu
DATE: 2017.02.17
*******************************/
// process 객체에 exit 이벤트 연결
process.on('exit', function(code) {
    console.log('바이 짜이찌엔~');
});

// process 객체에 uncaughtException 이벤트 연결
process.on('uncaughtException', function(error) {
    console.log('예외 발생!');
});

// 2초 간격으로 3번의 예외 발생
var count = 0;
var test = function() {
    count += 1;
    if (count > 3) {
        return;
    }
    setTimeout(test, 2000);
    console.log('error2', error);
    error();        // 오류내기 위해 무의미한 문법 넣어놓음.
};

setTimeout(test, 2000);
