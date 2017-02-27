/*******************************
TITLE: 쿠키 생성과 추출
AUTHOR: Assu
DATE: 2017.02.27
*******************************/
// 모듈 추출
var http = require('http');

http.createServer(function(req, res) {
    // GET COOKIE
    var cookie = req.headers.cookie;

    // SET COOKIE
    res.writeHead(200, {
        'Content-Type':'text/html',
        'Set-Cookie':['name=Assu', 'region=suwon']
    });
    
    res.end(JSON.stringify(cookie));    // "name=Assu; region=suwon"
    //res.end(cookie);                  // name=Assu; region=suwon
}).listen(52273, function() {
    console.log('Server Running at http://127.0.0.1:52273~');
});
