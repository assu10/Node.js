/*******************************
TITLE: mysql CRUD 구현
AUTHOR: Assu
DATE: 2017.03.10
*******************************/
// 모듈 추출
var fs = require('fs');
var ejs = require('ejs');
var mysql = require('mysql');
var express = require('express');
var bodyParser = require('body-parser');

// 데이터베이스와 연결
var client = mysql.createConnection({
    user:'root',
    password:'1234',
    database:'company'
});

// 서버 생성
var app = express();
app.use(bodyParser.urlencoded({
    extended:false
}));

// 서버 실행
app.listen(52273, function() {
    console.log('Server Running at http://127.0.0.1:52273');
});

// 라우트 수행
app.get('/', function(req, res) {
    // 데이터 얻어서 ejs 모듈로 화면에 출력
    fs.readFile('9-4-1.list.html', 'utf8', function(err, data) {
        client.query('SELECT * FROM PRODUCTS', function(err, result) {
            res.send(ejs.render(data, {
                data:result
            }));
        });
    });
});
app.get('/delete/:id', function(req, res) {
    client.query('DELETE FROM PRODUCTS WHERE ID = ?', [req.params.id], function() {
        res.redirect('/');
    });
});
app.get('/insert', function(req, res) {
    fs.readFile('9-4-1.insert.html', 'utf8', function(err, data) {
        res.send(data);
    });
});
app.post('/insert', function(req, res) {
    var body = req.body;
    client.query('INSERT INTO PRODUCTS (NAME, MODELNUMBER, SERIES) VALUES (?, ?, ?)', [
        body.name, body.modelnumber, body.series
    ], function() {
        res.redirect('/');
    });
});
app.get('/edit/:id', function(req, res) {
    fs.readFile('9-4-1.edit.html', 'utf8', function(err, data) {
        client.query('SELECT * FROM PRODUCTS WHERE ID = ?', [req.params.id], function(err, result) {
            res.send(ejs.render(data, {
                data:result[0]
            }));
        });
    });
});
app.post('/edit/:id', function(req, res) {
    var body = req.body;
    client.query('UPDATE PRODUCTS SET NAME = ?, MODELNUMBER = ?, SERIES = ? WHERE ID = ?', [
        body.name, body.modelnumber, body.series, req.params.id
    ], function() {
        res.redirect('/');
    });
});
