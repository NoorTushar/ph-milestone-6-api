// Reduces the array to a single value

// Syntax:
// arr.reduce((accumulator, element) => { })

// case 1: find sum of all numbers:

const numbers = [1, 2, 3, 4, 5, 6, 7];

let total = numbers.reduce((accumulator, element) => {
   return accumulator + element; // final return is 28
});

console.log(total); // output: 28

// 1. accumulator = 0 and element = 1, returning 0 + 1 = 1
// 2. accumulator = 1 and element = 2, returning 1 + 2 = 3
// 3. accumulator = 3 and element = 3, returning 3 + 3 = 6
// 4. accumulator = 6 and element = 4, returning 6 + 4 = 10
// 5. accumulator = 10 and element = 5, returning 10 + 5 = 15
// 6. accumulator = 15 and element = 6, returning 15 + 6 = 21
// 7. accumulator = 21 and element = 7, returning 21 + 7 = 28

// case2: find the Max Number using Reduce

let maxNumber = numbers.reduce((max, element) => {
   if (element > max) {
      max = element;
   }
   return max;
});

console.log(maxNumber); // output: 7
