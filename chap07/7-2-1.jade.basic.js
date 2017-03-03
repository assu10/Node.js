/*******************************
TITLE: jade 페이지를 HTML 페이지로 전환
        https://github.com/pugjs/pug
AUTHOR: Assu
DATE: 2017.03.02
*******************************/
var http = require('http');
var jade = require('jade');
var fs = require('fs');

http.createServer(function(req, res) {
    fs.readFile('7-2-2.jadeStyleScript.jade', 'utf8', function(err, data) {
        // jade 모듈 사용 (jade의 compile() 은 문자열이 아닌 함수 리턴)
        var fn = jade.compile(data);

        res.writeHead(200, {'Content-Type':'text/html'});
        res.end(fn());
    });
}).listen(52273, function() {
    console.log('Server Running at http://127.0.0.1:52273');
});
