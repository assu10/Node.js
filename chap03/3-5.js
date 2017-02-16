/*******************************
TITLE: 전역객체 process 객체의 argv 속성과 exit() 메서드
AUTHOR: Assu
DATE: 2017.02.16
*******************************/
// process.argv
// 실행은 repl창에서 note 3-5 --exit 10000 으로 실행
process.argv.forEach(function(item, index) {
    // 출력
    console.log(index + ' : ' + typeof(item) + ' : ', item);
    // 실행 매개변수에 --exit가 있을 때
    if (item == '--exit') {
        // 다음 실행 매개변수를 얻는다.
        var exitTime = Number(process.argv[index+1]);
        // 일정 시간 후 프로그램 종료
        setTimeout(function() {
            process.exit();
        }, exitTime);
    }
});
