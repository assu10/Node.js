/*******************************
TITLE: ejs 모듈을 사용한 웹 페이지 제공
        https://github.com/tj/ejs
AUTHOR: Assu
DATE: 2017.02.27
*******************************/
var http = require('http');
var fs = require('fs');
var ejs = require('ejs');

http.createServer(function(req, res) {
    // ejsPage.ejs 파일 읽음
    fs.readFile('7-1-1.ejsPage.ejs', 'utf8', function(err, data) {
        res.writeHead(200, {'Content-Type':'text/html'});
        res.end(ejs.render(data));
    });
}).listen(52273, function() {
    console.log('Server Running at http://127.0.0.1:52273~');
});
