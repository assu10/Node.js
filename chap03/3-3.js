/*******************************
TITLE: 전역객체 console의 시간메서드
AUTHOR: Assu
DATE: 2017.02.16
*******************************/
// 시간측정 시작
console.time('assutest');

var output = 1;
for (var i = 0; i <= 10; i++) {
    output *= i;
}
console.log('Result: ', output);

// 시간측정 종료
console.timeEnd('assutest');
