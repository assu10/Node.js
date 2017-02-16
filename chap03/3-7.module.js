/*******************************
TITLE: 전역객체 exports 에 메서드 생성
AUTHOR: Assu
DATE: 2017.02.16
*******************************/
// 절대값을 구하는 메서드
exports.abs = function(number) {
    if (0 < number) {
        return nubmer;
    } else {
        return -number;
    }
};

// 원의 넓이를 구하는 메서드
exports.circleArea = function(radius) {
        return radius * radius * Math.PI;
};
