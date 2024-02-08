let Flight = function() {
};

Flight.prototype.move = function() {
  console.log('비행기 이륙');
};

let KE = function() {
    Flight.apply(this, arguments); // 속성 상속
}

KE.prototype = Object.create(Flight.prototype); // 프로토타입 상속 
KE.prototype.constructor = KE; // 버그 패치

    console.log(new Flight().move()); // 비행기 이륙 // new없으면 에러: console.log(Flight().move())
    console.log(new KE().move()); //  비행기 이륙

KE.prototype.move = function(flight_type) { // < 오버라이딩 >
  console.log(flight_type + ' 이륙');
  return '착륙';
};

    console.log(new KE().move('대한항공')); //  대한항공 이륙 // 착륙
    console.log(new KE().move()); // undefined 이륙 // 착륙