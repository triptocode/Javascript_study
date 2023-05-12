var a, b, rest;
[a, b] = [10, 20];
console.log(a); // 10
console.log(b); // 20

[a, b, ...rest] = [10, 20, 30, 40, 50];
console.log(a); // 10
console.log(b); // 20
console.log(rest); // [30, 40, 50]


// Stage 4(finished) proposal
({a, b, ...rest} = {a: 10, b: 20, c: 30, d: 40});
console.log(a); // 10
console.log(b); // 20
console.log(rest); // {c: 30, d: 40}




// 객체 비구조화 할당 1 

({ a, b } = { a: 10, b: 20 });
console.log(a); // 10
console.log(b); // 20



// 객체 비구조화 할당 2 
let sayKorean = { x: '에이', y: '비' };
let { x, y } = sayKorean;
console.log(x); // 에이
console.log(y); // 비



// 객체 비구조화 할당 3 - 함수 파라미터에 사용하기 
const obj = { param1: 'p1', param2: 'p2' };

function print({ param1, param2 }) {
  console.log(param1);
  console.log(param2);
}
print(obj);





// 새로운 변수 이름으로 할당하기
var name = {num: 123, trueOrFalse: true};
var {num: change1, trueOrFalse: change2} = name;

console.log(change1); // 123
console.log(change2); // true