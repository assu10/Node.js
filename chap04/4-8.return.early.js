/*******************************
TITLE: 조기 리턴
AUTHOR: Assu
DATE: 2017.02.17
*******************************/
var fs = require('fs');

// 비동기적으로 파일 읽기
fs.readFile('textfile.txt', 'utf8', function(error, data) {
    // 오류 있으면 바로 리턴
    if (error) { return console.log(error); }

    // 원하는 처리
    console.log(data);
});
