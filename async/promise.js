const myPromise = new Promise((resolve, reject) => {

    // 비동기 작업 처리
    setTimeout(()=>{
        const text = prompt(' "p"를 입력 하시오');
        if(text==='p'){
            resolve('pass');
        }else{
            reject('error');
        }
    },2000)
});

myPromise
    .then((rs)=>{
        console.log("결과: "+ rs)
    })
    .catch((rj)=>{
        console.log("에러: "+rj)
    })
    .finally(()=>{
        console.log("조건없이 실행")
    })
