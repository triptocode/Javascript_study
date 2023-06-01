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

// 2.  map()
const arr3 = [1,2,3];
const myArr3 = arr3.map(num=> num*3)

console.log(myArr3); // [3, 6, 9]
console.log(arr3)

