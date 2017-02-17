/*******************************
TITLE: File System 모듈 사용법 (radFileSync, readFile)
AUTHOR: Assu
DATE: 2017.02.17
*******************************/
// 모듈 추출
var fs = require('fs');

// 파일을 동기적으로 읽음
var text = fs.readFileSync('textfile.txt', 'utf8');
console.log(text);

console.log('------------------------------');

// 파일을 비동기적으로 읽음
// fileSystem.readFile() : readFile() 메서드를 만나는 순간 이벤트 리스너를 등록하고
//                          파일을 모두 읽게 만들어 이벤트 리스터 실행
fs.readFile('textfile.txt', 'utf8', function(error, data) {
    console.log(data);
});
