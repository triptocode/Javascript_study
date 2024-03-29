
// 1.  리터럴 (= literal) VS  변수 (= variable )
// 리터럴은 문자 그대로를 의미, 타입이 정해지고 고정값
// 1) 쌍따옴표, 홑따옴표 둘중하나 다 가능,  
// 2) ; 세미콜론은 작성해도 안해도 다 작동
console.log( 'hello');
console.log( "hello");
console.log( 'hello') 

console.log("2022-12-03")  // 문자 
console.log(2022-12-03)    // 숫자 , 뺄셈


// 2. 변수 
// 변수란 데이터 저장소 같은 개념, 변할수 있는수, 타입이 없고 데이터를 넣어  define정의,할당함 ( 리터럴은 고정값 )
// 변수 종류 : var, let , const 
// 변수형식:  var 변수명 = 대입값 
var a = 123
var b = 'hi'
console.log( a) // 변수 - 숫자는 따옴표 없이 대입했음
console.log( b) // 변수 - 문자는 따옴표로 감싸서 대입
console.log( '안녕') // 리터럴 - 변수사용없이 바로 출력


var x = 2     // 숫자
var y = '2'   // 문자 

console.log(x+x) //4
console.log(y+y) //22

let fruit               // 변수 선언만 하고 
    fruit = 'apple';    // 데이터 정의= 할당은 따로 해줄수도 있고
console.log(fruit)

let color = 'yellow'  // 변수 선언과 동시에 데이터 할당=정의를 하는 초기화설정도 가능
console.log(color)


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
{   age = 10;
    var age;
}
    console.log(age);


// 2. let  - {} 블록 영역 밖과 안의 선언 여부에 따른 출력 가능성 상이 
// 아래 예시를 통해 
//1) let 변수명선언을 {} 밖에서 했으면 {}안과 밖에서 출력가능   
// 2) let 변수명선언을 {} 안에서 했으면 {} 안에서만 출력된다 

 // 처음부터 let 변수선언과 동시에 값을 정의=할당하는 초기화 가능
let globalName = 'global'   // let을 {}밖에서 변수선언을 할 경우 {} 안과 밖 모두에서 출력가능!
{ console.log(globalName); 

        let name = 'ana';
        console.log(name);

        // let name = 'lisa';   let을 붙이면 같은 중복된 변수명으로 새로 변수 선언하는것이라 에러발생
        name = 'lisa';     // let을 빼면 이미 선언한 let 의 name 변수명에 값을 재정의=재할당 하는것은 가능
        console.log(name);

        name='nick';    // 세번째로 name 변수명에 데이터 재정의 중 
}
console.log(globalName); /** {}밖의 let 변수globalName --> {}안과 밖에서 모두 출력가능  */
//  console.log(name)는 에러발생! let name 처럼 {}안에서 변수선언시  --> {} 안에서만 출력가능! 



// 3. Constants - immutable 데이터 재정의 불가: security, safety, reduce human mistake
const daysInWeek = 7;
const price = 5000;
console.log(`일주일은 몇일인가? 답:${daysInWeek}일`);   // 주의: 역따옴표 사용! ( 키보드에서: 물결표시key )
           //일주일은 몇일인가? 답:7일
           // console.log('일주일은 몇일인가? 답: ' +daysInWeek+ '일'); 

    price = 6000;   // 콘솔창 확인시 오류 
    console.log(price)  // 오류이유: const name = 5000으로 정의를 이미 했고, const성격상 재정의 불가 (let과 차이점)
        

