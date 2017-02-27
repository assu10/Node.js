/*******************************
TITLE: 쿠키 분해
AUTHOR: Assu
DATE: 2017.02.27
*******************************/
var http = require('http');

http.createServer(function(req, res) {
    if (req.headers.cookie) {
        var cookie = req.headers.cookie.split(';').map(function(element) {
            var elements = element.split('=');
            return {
                key:elements[0],
                value:elements[1]
            };
        });

        res.end(JSON.stringify(cookie));    // [{"key":"name2","value":"Assu"},{"key":" region2","value":"suwon"}]
    } else {
        // 쿠키 생성
        res.writeHead(200, {
            'Content-Type':'text/html',
            'Set-Cookie':['name2=Assu','region2=suwon']
        });

        res.end('쿠키 생성 완료');
    }
}).listen(52273, function() {
    console.log('Server Running at http://127.0.0.1:52273~~');
});
