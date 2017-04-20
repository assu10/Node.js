/*******************************
TITLE: 실시간 물건 구매
        처음에는 화면에 물건을 표시하고 물건을 카트에 보관.
        카트에 들어간 물건은 1분동안만 카트에 보관되며, 1분 이후에는 자동으로 카트에서 빠져나옴.
        10분안에 물건을 구매하면 한 사용자가 물건을 하나씩만 구매할 수 있게 물건 목록에서 물건 제외.
AUTHOR: Assu
DATE: 2017.04.19
*******************************/
// 모듈 추출
var fs = require('fs');             // 파일 읽을 때 사용
var ejs = require('ejs');           // 파일 읽을 때 사용
var http = require('http');         // 웹 서버 실행 시 사용
var express = require('express');   // 웹 서버 생성 시 사용

// 생성자 함수 선언
var counter = 0;
function Product(name, image, price, count) {
    this.index = counter++;
    this.name = name;
    this.image = image;
    this.price = price;
    this.count = count;
}

// 변수 선언
var products = [
    new Product('JavaScript', 'chrome.png', 28000, 30),
    new Product('jQuery', 'chrome.png', 28000, 30),
    new Product('Node.js', 'chrome.png', 32000, 30),
    new Product('Socket.io', 'chrome.png', 17000, 30),
    new Product('Connect', 'chrome.png', 18000, 30),
    new Product('Express', 'chrome.png', 31000, 30),
    new Product('EJS', 'chrome.png', 12000, 30)
];

// 웹 서버 생성
var app = express();
var server = http.createServer(app);

// 웹 서버 설정 (static 미들웨어를 사용하여 public 폴더를 서버에 올림)
app.use(express.static(__dirname + '/public'));

// 라우트 수행 (html 파일을 읽어서 ejs 모듈을 사용해 products 객체 전달)
app.get('/', function(req, res) {
    var htmlPage = fs.readFileSync('HTMLPage.html' ,'utf8');

    // 응답
    res.send(ejs.render(htmlPage, {
        products: products
    }));
});

// 웹 서버 실행
server.listen(52273, function() {
    console.log('Server Running at http://127.0.0.1:52273');
});

// 소켓 서버 생성 및 실행
var io = require('socket.io').listen(server);
io.sockets.on('connection', function(socket) {
    // 함수 선언 (물건구매를 취소하거나 타이머가 작동할 때 실행할 함수)
    function onReturn(index) {
        // 물건 개수 증가
        products[index].count++;
        console.log('--------------------');
        console.log('onReturn', products[index]);

        // 타이머 제거
        if (cart[index].timerID != null) {
            clearTimeout(cart[index].timerID);    
        }

        // 카트에서 물건 제거
        delete cart[index];

        // count 이벤트 발생시킴
        io.sockets.emit('count', {
            index: index,
            count: products[index].count,
            toggle: 'on'
        });

    }

    // 변수 선언 (배열이 아니라 객체로 선언한 이유는 delete 키워드로 요소를 쉽게 제거하기 위함)
    var cart = {};

    // cart 이벤트 (물건을 카트에 넣으면 발생하는 이벤트)
    socket.on('cart', function (index) {
        console.log('cart product', products);

        // 물건 개수 감소
        products[index].count--;

        // 카트에 물건을 넣고 타이머 시작
        cart[index] = {};
        cart[index].index = index;
        cart[index].timerID = setTimeout(function() {
            onReturn(index);
        }, 1000*10);    // 10초

        console.log('--------------------');
        console.log('cart cart', cart);

        // count 이벤트 발생
        io.sockets.emit('count', {
            index:index,
            count:products[index].count
        });
    });

    // buy 이벤트 (카트에 물건을 넣고 구매 버튼 누를 때 발생하는 이벤트)
    socket.on('buy', function(index) {
        // 타이머 제거
        clearTimeout(cart[index].timerID);

        // 카트에서 물건 제거
        delete cart[index];

        // count 이벤트 발생
        io.sockets.emit('count', {
            index:index,
            count:products[index].count
        });
    });

    // return 이벤트
    socket.on('return', function(index) {
        onReturn(index);
    });
});
