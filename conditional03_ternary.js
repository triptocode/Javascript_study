// node.js 개발환경에서 터미널창에서 console 출력시 js파일 저장해야 노드명령어 'node 자스파일명' 로 실행가능! 
// ex) node conditional03_ternary

let array=[]; // let array=[1,2,3]; 
let text="";

if(array.length===0){text="array 배열에 데이터가 없습니다."
//if(array.length=0){text="array 배열에 데이터가 없습니다."  // if(0)과 같고 false로 인식해서 else로 빠져서 출력됨
// 참고 if(0)이 false로 인식해서 else인 이유: https://developer.mozilla.org/ko/docs/Glossary/Falsy 
}
else{text="array 배열에 데이터가 존재합니다."}

console.log(text)

