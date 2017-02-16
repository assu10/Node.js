/*******************************
TITLE: exports 객체로 생성한 메서드 사용
        모듈을 생성할때는 exports 객체 사용, 모듈을 추출할때는 require() 함수 사용
AUTHOR: Assu
DATE: 2017.02.16
*******************************/
// 모듈 추출
var module = require('./3-7.module.js');

// 모듈 사용
console.log('abs(-2) = %d', module.abs(-2));
console.log('circleArea(3) = %d', module.circleArea(3));
