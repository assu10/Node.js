/*******************************
TITLE: 이벤트 강제 발생 (emit)
        emit() : emit('exit'); 해도 프로그램종료 안됨.
                 emit() 메서드를 사용해 이벤트를 강제호출하면 이벤트 리스터만 실행됨.
AUTHOR: Assu
DATE: 2017.02.17
*******************************/

// exit 이벤트 연결
process.on('exit', function(code) {
    console.log('굿바이.');
});

// 프로그램 종료 (이게 여기 있으면 아래는 실행안됨)
process.exit();

// 이벤트 강제 호출
process.emit('exit');
process.emit('exit');
process.emit('exit');
process.emit('exit');

console.log('프로그램 실행 중~');
