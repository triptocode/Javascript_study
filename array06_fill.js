
// Array(length=배열의요소들 갯수) : RangeError is thrown if there's only one argument Array(arrayLength) and its value is not between 0 and 2의32승 - 1 (inclusive)
// 참고: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/Array

// 1 byte  = 8 bits
// 4 bytes = 32 bits

console.log(Array(4294967295)) // [ <4294967295 empty items> ]
// console.log(Array(4294967296)) // RangeError: Invalid array length


const arr1 = Array(3)
const arr2 = Array(3).fill(null);
const arr3 = ["","",""]
const arr4 = Array(3).fill('데이터값');

console.log(arr1) //  [empty × 3]
console.log(arr2) //  [ null, null, null]
console.log(arr3) //  [ '', '', '' ]
console.log(arr4) //  ['데이터값', '데이터값', '데이터값']

console.log(arr1.every(Boolean)) // true
console.log(arr2.every(Boolean)) // false
console.log(arr3.every(Boolean)) // false
console.log(arr4.every(Boolean)) // true




let squares4 = [null, null, null]
console.log(squares4.every(Boolean)) //false

let squares5 = [null, 'x', null]
console.log(squares5.every(Boolean)) // false

let squares6= ['x', 'x', 'x']
console.log(squares6.every(Boolean)) // true

let squares7= ['x', 'x', 'o']
console.log(+squares7.every(Boolean)) // true

let squares8= [1,2,3]
console.log(squares8.every(Boolean))  // true





//node array06_fill