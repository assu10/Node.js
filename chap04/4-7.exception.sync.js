/*******************************
TITLE: 동기처리를 하는 메서드의 예외처리
AUTHOR: Assu
DATE: 2017.02.17
*******************************/
// 모듈 추출
var fs = require('fs');

// 파일 읽기
try {
    var data = fs.readFileSync('textfile.txt', 'utf8');
    console.log(data);
} catch (e) {
    console.log(e);
}

// 파일 쓰기
try {
    fs.writeFileSync('textfile.txt', 'Hello~', 'utf8');
    console.log('FILE WRITE COMPLETE');
} catch (e) {
    console.log(e);
}
