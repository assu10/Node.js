/*******************************
TITLE: forever 모듈 예제
AUTHOR: Assu
DATE: 2017.03.03
*******************************/
require('http').createServer(function(req, res) {
    if (req.url == '/') {
        console.log(req.url, 'hahaah');
        res.write('<!DOCTYPE html>');
        res.write('<html>');
        res.write('<head>');
        res.write('    <title>Forever</title>');
        res.write('</head>');
        res.write('<body>');
        res.write('    <h1>Forever</h1>');
        res.write('</body>');
        res.write('</html>');
        res.end();
    } else {
        console.log(req.url, '-------------------------');
        // 오류 발생시킴
        fjdksalfd.red();
    }
}).listen(52273, function() {
    console.log('Server running at http://127.0.0.1:52273');
});
