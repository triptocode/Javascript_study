// 변수 3개 비교: var, let, const 
// Block Scope vs Global Scope


// 1. var 
// var - 과거에 사용, 현재는 let, const 권함
// var 의 선언하지 않아도 할당되는 문제 
// var hoisting (move declaration from bottome to top )
// has no block scope
{   age = 4;
    var age;
}
    console.log(age);


// 2. let
let globalName = 'globalName'
{
console.log(globalName);

let name = 'ana';
console.log(name);

name = 'lisa';
console.log(name);

name = 'nick';
}

console.log(name);
console.log(globalName);


// 3. Constants - immutable : security, tread safety, reduce human mistake
const daysInWeek = 7;

const price = 5000;
console.log(`가격: ${price}`);

const a = 1/0;
const b = -1/0;
const c = 'not a num'/2;
console.log(a);
console.log(b);
console.log(c); // NaN

