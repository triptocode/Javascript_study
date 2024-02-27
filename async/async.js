  // ------------------------1) 브라우저의 JS 코드 실행 과정 : 호출 스택 (Call Stack) -----------------
  
  function add1(x, y) {
    console.log('==add1호출==') 
    return x + y;
  }
  
  function add2(x) {
    console.log('==add2호출==')
    return add1(x, 2); // `add1()`를 호출
  }
  
  function add3(x) {
    console.log('==add3호출==')
    const result = add2(x); // `add2()`를 호출
    console.log(result); // `console.log()`를 호출
  }
  
  add3(3); // 첫번째, 호출시작점 : `add3`를 호출

// 출력결과: 
// ==add3호출==
// ==add2호출==
// ==add1호출==
// 5



// ------------------------2) 브라우저의 JS 코드 실행 과정 :  호출스택과 작업큐 (=task que) -----------------
setTimeout(() => {
  console.log('----hello----');
}, 0); // 작업 큐에 콜백이 추가됨

console.log('----world----');