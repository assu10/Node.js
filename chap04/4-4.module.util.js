/*******************************
TITLE: util 모듈 사용법
AUTHOR: Assu
DATE: 2017.02.16
*******************************/
// 모듈 추출
var util = require('util');

// 모듈 사용
var data = util.format('%d + %d = %d', 52, 273, 52+273);
console.log(data);
