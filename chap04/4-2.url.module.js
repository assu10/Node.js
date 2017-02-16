/*******************************
TITLE: url 모듈 사용법
AUTHOR: Assu
DATE: 2017.02.16
*******************************/
// 모듈 추출
var url = require('url');

// 모듈 사용
// parse() : url 문자열을 URL 객체로 변환하여 리턴
var parsedObject = url.parse('http://www.hanbit.co.kr/store/books/look.php?p_code=B4250257160');
console.log(parsedObject);
