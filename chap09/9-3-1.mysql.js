/*******************************
TITLE: mysql 모듈 사용
AUTHOR: Assu
DATE: 2017.03.10
*******************************/
// 모듈 추출
var mysql = require('mysql');

// 데이터베이스와 연결
var client = mysql.createConnection({
    user:'root',
    password:'1234',
    database:'company'
});

// 데이터베이스 쿼리 사용
client.query('use company');
client.query('SELECT * FROM PRODUCTS', function (err, result, fields) {
    if (err) {
        console.log('오류');
    } else {
        console.log(result);
    }
});
client.query('INSERT INTO PRODUCTS (NAME, MODELNUMBER, SERIES) VALUES (?, ?, ?)', [
    'ASSU', '777', '77777'
], function (err, result, fiels) {

});
