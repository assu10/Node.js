/*******************************
TITLE: 이벤트 연결개수 제한 해제 (setMaxListeners())
        Node.js는 한 이벤트에 10개가 넘는 이벤트 리스터 연결할 경우 개발자 실수로 간주 (정상 실행되지만 경고 발생)
        이 때는 setMaxListeners() 사용
AUTHOR: Assu
DATE: 2017.02.17
*******************************/
// 이벤트 연결 개수 제한을 15개까지 늘림
process.setMaxListeners(15);

// 이벤트 11개 연결
process.on('exit', function() { });
process.on('exit', function() { });
process.on('exit', function() { });
process.on('exit', function() { });
process.on('exit', function() { });
process.on('exit', function() { });
process.on('exit', function() { });
process.on('exit', function() { });
process.on('exit', function() { });
process.on('exit', function() { });
process.on('exit', function() { });
