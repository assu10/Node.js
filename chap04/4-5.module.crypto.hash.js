/*******************************
TITLE: crypto 모듈을 사용한 해시
AUTHOR: Assu
DATE: 2017.02.16
*******************************/
// 모듈 추출
var crypto = require('crypto');

// 해시 생성
var shasum = crypto.createHash('sha256');
shasum.update('crypto_hash');
var output = shasum.digest('hex');

// 출력
console.log('crypto_hash : ', output);
