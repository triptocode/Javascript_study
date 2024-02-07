
var Animal = function() {
};
Animal.prototype.move = function() {
  console.log('동물이 움직여요');
};

var Cat = function() {
  Animal.apply(this, arguments); // 속성 상속받는 방법
}
Cat.prototype = Object.create(Animal.prototype); // 프로토타입 상속 방법
Cat.prototype.constructor = Cat; // 버그 패치

console.log(new Animal().move()); // 동물이 움직여요
console.log(new Cat().move()); // 동물이 움직여요

Cat.prototype.move = function(sound) { // < 오버라이딩 >
  console.log(sound + ' 움직여요');
  return '야옹';
};

console.log(new Cat().move('살금살금')); // 살금살금 움직여요 // 야옹
