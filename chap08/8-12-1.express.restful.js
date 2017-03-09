/*******************************
TITLE: RESTful 웹서비스 개발
AUTHOR: Assu
DATE:
*******************************/
// 모둘 추출
var fs = require('fs');
var express = require('express');
var bodyParser = require('body-parser');

// 더미 데이터베이스 구현
var DummyDB = (function() {
    var DummyDB = {};
    var storage = [];
    var count = 1;

    // 메서드 구현
    DummyDB.get = function(id) {
        if (id) {
            // 매개변수 있으면 특정 데이터 리턴
            id = (typeof id == 'string') ? Number(id) : id;
            // 데이터 선택
            for (var i in storage) {
                if (storage[i].id == id) {
                    return storage[i];
                }
            }
        } else {
            // 모든 데이터 리턴
            return storage;
        }
    };

    DummyDB.insert = function(data) {
        data.id = count++;
        storage.push(data);
        return data;
    };

    DummyDB.remove = function(id) {
        id = (typeof id == 'string') ? Number(id) : id;
        for (var i in storage) {
            if (storage[i].id == id) {
                storage.splice(i, 1);
                return true;
            }
        }
        return false;
    };

    return DummyDB;
})();

// 서버 생성
var app = express();

// 미들웨어 설정
app.use(bodyParser.urlencoded({
    extended:false
}));

// 라우터 설정
// 모든 데이터 요청
app.get('/user', function(req, res) {
    res.send(DummyDB.get());
});
// 특정 데이터 요청
app.get('/user/:id', function(req, res) {
    res.send(DummyDB.get(req.params.id));       // id는 url로 요청할거다 (그래서 req.body가 아님)
});
app.post('/user', function(req, res) {
    var name = req.body.name;
    var region = req.body.region;

    if (name && region) {
        res.send(DummyDB.insert({
            name:name,
            region:region
        }));
    } else {
        throw new Error('error');
    }
});
app.put('/user/:id', function(req, res) {
    var id = req.params.id;
    var name = req.body.name;
    var region = req.body.region;

    var item = DummyDB.get(id);
    item.name = name || item.name;          // body에 name 있으면 name으로 수정, 없으면 기존값 유지
    item.region = region || item.region;

    res.send(item);
});
app.delete('/user/:id', function(req, res) {
    res.send(DummyDB.remove(req.params.id));
});

// 서버 실행
app.listen(52273, function() {
    console.log('Server Running at http://127.0.0.1:52273~');
});
