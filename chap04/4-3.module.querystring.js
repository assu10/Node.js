/*******************************
TITLE: querystring 모듈 사용법
AUTHOR: Assu
DATE: 2017.02.16
*******************************/
// 모듈 추출
var url = require('url');
var querystring = require('querystring');

// 모듈 사용
// url.parse() : url 문자열을 URL 객체로 변환하여 리턴
// queyrstring.parse() : 쿼리문자열을 쿼리 객체로 변환하여 리턴
// querystring.stringify : 쿼리 객체를 쿼리 문자열로 변환하여 리턴
var parsedObject = url.parse('http://www.hanbit.co.kr/store/books/look.php?p_code=B4250257160');
console.log(parsedObject.query);                        // p_code=B4250257160
console.log(querystring.parse(parsedObject.query));     // { p_code: 'B4250257160' }
