// node.js 개발환경에서 터미널창에서 console 출력시 js파일 저장해야 노드명령어 'node 자스파일명' 로 실행가능! 
// ex) node conditional03_ternary


// if 문 vs 삼항연산자 비교 
    // 1-1. if 문 
    let array=[]; // let array=[1,2,3]; 
    let text="";

    if(array.length===0){ text= "array 배열은 빈상태"
    //if(array.length=0){text="array 배열에 데이터가 없습니다."  // if(0)과 같고 false로 인식해서 else로 빠져서 출력됨
    // 참고 if(0)이 false로 인식해서 else인 이유: https://developer.mozilla.org/ko/docs/Glossary/Falsy 
    }
    else{ text= "array 배열에 요소들이 존재 !!!."}

    console.log(text)

    // 1-2. 삼항연산자 (조건식: 연산공식)
    let array2=[]; // let array=[1,2,3]; 
    let text2= array2.length ===0 ? "array2 배열은 빈상태" : "array2 배열에 요소들이 존재 !!!.";
    console.log(text2)


    // 2-1  삼항연산자 (조건식: 매개변수)
    function trueOrFalse(isMember) {
        return (isMember ? '참' : '거짓');
      }
      
      console.log(trueOrFalse(true));  

      console.log(trueOrFalse(false)); 
      // js에서 false인 기타 종류들
      console.log(trueOrFalse(0));
      console.log(trueOrFalse(-0));
      console.log(trueOrFalse(""));
      console.log(trueOrFalse(null));
      

