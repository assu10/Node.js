/*******************************
TITLE: File System 모듈 사용법 (writeFileSync, writeFile)
AUTHOR: Assu
DATE: 2017.02.17
*******************************/
// 모듈 추출
var fs = require('fs');

// 변수 선언
var data = 'Hello World~♥';

// 파일을 비동기적으로 씀
fs.writeFile('textFileOtherWrite.txt', data, 'utf8', function(error) {
    console.log('WRITE FILE ASYNC COMPLETE');
});

// 파일을 동기적으로 씀
fs.writeFileSync('textFileotherWriteSync.txt', data, 'utf8');
console.log('WRITE FILE SYNC COMPLETE');
