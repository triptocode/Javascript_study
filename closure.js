function outter1(){
    function inner(){
            let season = "spring";
            console.log(season);
    }

    inner()
}

outter1();

// 클로저 : 내부함수에 변수가 없으면 외부함수에서 찾을 수 있다. 

function outter2(){
    let color = 'red';
    function inner2(){
        console.log(color)
    }
    inner2()
}

outter2()


