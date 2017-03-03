/*******************************
TITLE: ejs 모듈을 사용한 웹 페이지 제공
AUTHOR: Assu
DATE: 2017.03.02
*******************************/
// 모듈 추출
var http = require('http');
var fs = require('fs');
var ejs = require('ejs');

http.createServer(function(req, res) {
    fs.readFile('7-1-2.ejsPage.ejs', 'utf8', function(err, data) {
        res.writeHead(200, {'Content-Type':'text/html'});
        res.end(ejs.render(data, {
            name : 'Assu~~',
            description : 'Hello Assu!!'
        }));
    });
}).listen(52273, function() {
    console.log('Server Running at http://127.0.0.1:52273~');
});
