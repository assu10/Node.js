/*******************************
TITLE: jade 코드로 전달한 데이터
AUTHOR: Assu
DATE:2017.03.03
*******************************/
var http = require('http');
var jade = require('jade');
var fs = require('fs');

http.createServer(function(req, res) {
    fs.readFile('7-2-2.jadePage.jade', 'utf8', function(err, data) {
        var fn = jade.compile(data);

        res.writeHead(200, {'Content-Type':'text/html'});
        res.end(fn({
            name:'Assu~~',
            description:'Hello!!'
        }));
    });
}).listen(52273, function() {
    console.log('Server Running at http://127.0.0.1:52273~');
});
