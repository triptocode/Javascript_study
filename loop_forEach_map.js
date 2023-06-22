// 1. forEach()
const arr1 = [1, 2, 3];
const myArr1 = [];

arr1.forEach(num => {
    myArr1.push(num * 3);
});

console.log(myArr1); // [3, 6, 9]
console.log(arr1)

// 1-2 forEach
const arr2 = [5,10,15];
const myArr2= arr2.forEach(num=>num*2)

console.log(myArr2); // undefined
console.log(arr2)

// 2.  map()S
const arr3 = [1,2,3];
const myArr3 = arr3.map(num=> num*3)

console.log(myArr3); // [3, 6, 9]
console.log(arr3)


// forEach VS map : new array 

const animals = ["lion", "tiger"];
let rr= animals.forEach(animal => {
            console.log(animal);
        });
console.log(rr); // undefined

// map - return 없을때  - 주석처리함 : 순회한 갯수만큼의 undefined요소들로 채워진 새로운 배열 반환 o
const animals1 = ["lion", "tiger"];
let rr1 = animals1.map(animal1 => {
        console.log(animal1);
       // return "동물명1: " + animal1
    });
console.log(rr1);  // [ undefined, undefined ]

const animals2 = ["lion", "tiger"];
// map - return 있을때 : 순회하고 return에 작성된 형태의 요소들로 채워진 새로운 배열 반환 o
let rr2 = animals2.map(animal2 => {
        console.log(animal2);
        return "동물명2: " + animal2 // 1과다르게 2에서 return 한줄 추가함
    });
console.log(rr2); // [ '동물명2: lion', '동물명2: tiger' ]

