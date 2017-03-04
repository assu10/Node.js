/*******************************
TITLE: 라우터 모듈의 활용
AUTHOR: Assu
DATE: 2017.03.04
*******************************/
// 모듈과 변수 선언
var express = require('express');
var router = express.Router();

// 페이지 라우트
router.get('/index', function(req, res) {
    res.send('인덱스');
});

// 외부로 뺀다.
exports.router = router;
