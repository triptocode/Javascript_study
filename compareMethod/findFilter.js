//--------------------------------------------------------------------------------------------------------------

console.log("-----------------filter() -------------------------------------------");
console.log("-----------array 또는 object + string 결합시 --> string---------------");


const arr1 = [1,2,'car',3,'집',4,5];

const result1 = arr1.filter(item => typeof item === "number");
const result2 = arr1.filter(item => typeof item === "string");
console.log("'number'타입, 'string'타입만 필터링해서 각각 출력하기");
console.log(result1); // [ 1, 2, 3, 4, 5 ]
console.log(result2); // [ 'car', '집' ]

const result3 = arr1.filter(item => item === 3);
console.log("\n값이 3인 값 구하기");
console.log(result3); // [3]

const result4 = arr1.filter(item => item !== 3);
console.log("\n값이 3이 아닌 값들 구하기");
console.log(result4); // [ 1, 2, 'car', '집', 4, 5 ]
 
//-------------------------------------------------------------------------------------------------------

console.log("---------------배열.find() 와 filter() 비교---------------------------");
let list = ["lorem1",  "lorem2", "lorem3" , "lorem4", 1 ,2 ,3]

function filterByType(arr, type){
  return arr.filter(item=> typeof item === type)
}

const words = filterByType(list, 'string')
const numbers = filterByType(list, 'number')

console.log(words)   //  [ 'lorem1', 'lorem2', 'lorem3', 'lorem4' ]
console.log(numbers) //  [ 1, 2, 3 ]

console.log({words, numbers}) // {} 는 객체 타입으로 생성/변경 words, numbers 명칭이 각key값
// {
//     words: [ 'lorem1', 'lorem2', 'lorem3', 'lorem4' ],
//     numbers: [ 1, 2, 3 ]
// }

// 위의 {words, numbers}로 객체만 출력한 결과와 '{words, numbers}: '+{words, numbers} 로 객체+문자열과 연결한 출력결과가 다른 이유
// object + string과 연결시 -> string으로 변환됨 : 객체 그대로 출력되지 않고, 문자열로 변환되어 "[object Object]"라는 문자열로 출력된것
console.log('{words, numbers}: '+{words, numbers}) // {words, numbers}: [object Object]

// array 또한 string과 결합하면 array -> string으로 변환됨
console.log('words, numbers: '+ words, numbers) // words, numbers: lorem1,lorem2,lorem3,lorem4 [ 1, 2, 3 ]
console.log(words+","+ numbers) // lorem1,lorem2,lorem3,lorem4,1,2,3



//------------------------------------------------------------------------------------------------------------------

console.log("--------------------------------배열.find() 와 filter() 비교-----------------------------------");


const arr2 = [10, 20, 30, 40, 50];

//30 이상인 값 - find() 사용
const result5 = arr2.find(item => item>10);
console.log("find() 사용");
console.log(result5); // 20 

//30 이상인 값 - filter() 사용
const result6 = arr2.filter(item => item>10);
console.log("\nfilter() 사용");
console.log(result6); // [20, 30, 40, 50]