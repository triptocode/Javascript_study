
//// 1. var 호이스팅 : 초기화 전에 사용 -> 에러 안남 = 이상함을 catch못함
console.log(text); // undefined  - 선언 + 초기화된(메모리 확보와 undefined로 초기화) 상태 
text = 'hi'; // - 선언 + 초기화 + 할당된 상태
var text;
console.log(text); // hi 


//// 2. let : 초기화 전에 사용 -> 에러 빌셍 = 이상함을 표시 ! 
console.log(text1); // ReferenceError: Cannot access 'text' before initialization 
text1 = 'hi'; 
let text1; // 여기서 초기화 됨 (undefined로 초기화 됨) 
console.log(text1); 


// //// 3. 초기화와 undefined
// let text2; // 여기서 초기화 됨 (undefined로 초기화 됨) 
// console.log(text2); 


// -참고 
// 초기화란? : 
// 변수를 var, let, 또는 const 키워드를 사용하여 선언하면 -?메모리에 공간이 할당되며,
// 이 공간은 undefined로 초기화된다. 
// 즉, 초기화란 변수가 메모리 공간을 확보하고, 해당 메모리 공간을 빈 값으로 설정하는 것을 말한다.