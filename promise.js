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
    .then((rslv)=>{
        console.log("결과: "+ rslv)
    })
    .catch((rej)=>{
        console.log("에러: "+rej)
    })
    .finally(()=>{
        console.log("조건없이 실행")
    })
