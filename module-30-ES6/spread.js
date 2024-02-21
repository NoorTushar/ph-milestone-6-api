// 3 idiots LOL

/****** case 1: using `...` to get only the values from an array ******/

const numbers = [1, 23, 3, 5, 6, 7, 8];
console.log(numbers); // [1, 23, 3, 5, 6, 7, 8]

console.log(...numbers); // 1 23 3 5 6 7 8

console.log(Math.max(numbers)); // NaN
console.log(Math.max(...numbers)); // 23

/****** case 2: to copy array ******/

// problem with direct copying, it will copy the reference
// so adding or removing from one variable will change the whole array

let array1 = [1, 2, 3];
let array2 = array1;

array2.push(4, 5);

console.log(array2); // [ 1, 2, 3, 4, 5 ]
console.log(array1); // [ 1, 2, 3, 4, 5 ]

// TO SOLVE THIS PROBLEM, use spread operator

let array3 = [...array1];
array3.push(6, 7);

console.log(array3); // [1, 2, 3, 4, 5, 6, 7]
console.log(array1); // [ 1, 2, 3, 4, 5 ]

/****** case 3: create a parameter to take infinite inputs ******/

const sum = (...numbers) => {
   let number = [...numbers];
   let sum = 0;
   number.forEach((number) => {
      sum += number;
   });

   return sum;
};

console.log(sum(3, 4, 5)); // 12
console.log(sum(3, 4, 5, 6, 7)); // 25
