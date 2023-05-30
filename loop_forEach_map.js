// Example of forEach()

const arr = [1, 2, 3, 4, 5];
const mulArr = [];

arr.forEach(num => {
  mulArr.push(num * 3);
});

console.log(mulArr); // [3, 6, 9, 12, 15]