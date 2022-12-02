
// 1.  리터럴 (= literal) VS  변수 (= variable )
// 리터럴은 문자 그대로를 의미
// 1) 쌍따옴표, 홑따옴표 둘중하나 다 가능,  
// 2) ; 세미콜론은 작성해도 안해도 다 작동
console.log( 'hello');
console.log( "hello");
console.log( 'hello')

console.log( 2) // 숫자
console.log( '2') // 문자 


// 2. 변수 
// 변수형식:  var 변수명 = 대입값 
var a = 1
var b = 'hi'
console.log( a)
console.log( b)
console.log( '안녕')


var x = 2
var y = '2'

console.log(x+x) //4
console.log(y+y) //22


// 3. JavaScript 이스케이프 시퀀스  :  \를 활용한 특수문자 표현 
// (주의: / 슬래시가 아닌 \ 역슬래시 )

console.log( 'it\'s a book');  //  홑따옴표 single quote
console.log( "New York is called \"The Big Apple\". "); //  쌍따옴표 double quote
console.log( 'hello\nworld');  //  한줄 띄우기 enter  


// 4.  변수 3가지 종류 비교 ( var let const )

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
let globalName = 'global'  // 처음부터 let 변수선언과 동시에 값을 정의=할당하는 초기화 가능 
{
    console.log(globalName); 

    let name = 'ana';
    console.log(name);

    // let name = 'lisa';   let으로 같은 중복된 변수명으로 새로 변수 선언하는것은 에러발생
    name = 'lisa';         // 이미 선언한 let 의 name 변수명에 값을 재정의=재할당 하는것은 가능
    console.log(name);

    name='nick';
}
//    console.log(name); 에러발생 
/** {}안의 let 변수name --> {} 안에서만 출력가능! 
 *  {}밖에서 출력시 오류발생, 주석처리
 * console.log(name) ; 
 */

/** {}밖의 let 변수globalName --> {}안과 밖에서 모두 출력가능  */
console.log(globalName);



// 3. Constants - immutable : security, safety, reduce human mistake
const daysInWeek = 7;
const price = 5000;
console.log(`일주일은 몇일인가? 답:${daysInWeek}일`);   // 주의: 역따옴표 사용! ( 키보드에서: 물결표시key )
           //일주일은 몇일인가? 답:7일
           // console.log('일주일은 몇일인가? 답: ' +daysInWeek+ '일'); 
        

