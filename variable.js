// JS 변수 3개 비교: var, let, const 
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
let globalName = 'global'
{
console.log(globalName);

let name = 'ana';
console.log(name);

name = 'lisa';
console.log(name);

name = 'nick';
}

/** {}안의 let 변수name --> {} 안에서만 출력가능! 
 *  {}밖에서 출력시 오류발생, 주석처리
 * console.log(name) ; 
 */

/** {}밖의 let 변수globalName --> {}안과 밖에서 모두 출력가능  */
console.log(globalName);


// 3. Constants - immutable : security, tread safety, reduce human mistake
const daysInWeek = 7;

const price = 5000;
console.log(`일주일은 몇일인가? 답:${daysInWeek}일`); 
           //일주일은 몇일인가? 답:7일

const a = 1/0;
const b = -1/0;
const c = 'not a num'/2;
console.log(a); //Infinity
console.log(b); //-Infinity
console.log(c); // NaN

