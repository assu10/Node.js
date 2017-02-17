/*******************************
TITLE: 이벤트 제거
        removeListener(eventName, handler(or listener라고도 함))
        removeAllListeners([eventName])
AUTHOR: Assu
DATE: 2017.02.17
*******************************/

// 변수 선언
var onUncaughtException = function(error) {
    console.log('예외 발생!');

    // 이벤트 제거
    // uncaughtException 이벤트의 onUncaughtException 리스너를 제거했으므로 1번은 '예외 발생!'이 출력되지만
    // 그 다음엔 오류 발생
    process.removeListener('uncaughtException', onUncaughtException);
};

// process 객체에 uncaughtException 이벤트 연결
process.on('uncaughtException', onUncaughtException);

// 2초 간격으로 예외 발생
var test = function() {
    setTimeout(test, 2000);
    fdsa();
};

setTimeout(test, 2000);
