/*******************************
TITLE: 비동기처리를 하는 메서드의 예외 처리
AUTHOR: Assu
DATE: 2017.02.17
*******************************/
// 모듈 추출
var fs = require('fs');

// 파일 읽기
fs.readFile('textfile.txt', 'utf8', function(error, data) {
    if (error) {
        console.log(error);
    } else {
        console.log(data);
    }
});

// 파일 쓰기
fs.writeFile('textfile.txt', 'Hi~', 'utf8', function(error, data) {
    if (error) {
        console.log(error);
    } else {
        console.log('FILE WRITE COMPLETE');
    }
});
