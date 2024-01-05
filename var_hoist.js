
//// 1. var 호이스팅 : 에러 안남
// console.log(text); // undefined  - 선언 + 초기화된(메모리 확보와 undefined로 초기화) 상태 
// text = 'hi'; // - 선언 + 초기화 + 할당된 상태
// var text;
// console.log(text); // hi 


//// 2. let : 에러 빌셍
console.log(text); // ReferenceError: Cannot access 'text' before initialization 
text = 'hi'; 
let text;
console.log(text); 