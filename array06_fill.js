
const squares1 = Array(3)
const squares2 = Array(3).fill(null);
const squares3 = Array(3).fill('데이터값');

console.log(squares1) // [empty × 3]
console.log(squares2) // [null, null, null]
console.log(squares3) // ['데이터값', '데이터값', '데이터값']



let squares4 = [null, null, null]
console.log(squares4.every(Boolean)) //false

let squares5 = [null, 'x', null]
console.log(squares5.every(Boolean)) // false

let squares6= ['x', 'x', 'x']
console.log(squares6.every(Boolean)) // true

let squares7= ['x', 'x', 'o']
console.log(squares7.every(Boolean)) // true