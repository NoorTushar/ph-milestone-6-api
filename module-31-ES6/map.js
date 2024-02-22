// MAP - similar to forEach, but it returns a new array with the values.

const numbers = [1, 2, 3, 4, 5];

const doubleNumbers = numbers.map((item) => {
   return item * 2;
});

console.log(doubleNumbers); // [ 2, 4, 6, 8, 10 ]

// it returns the new array with same length as the original array.

// Case2: we can create a function beforehand and pass it as a callback function

function multiplyByFour(n) {
   return n * 4;
}

const result = numbers.map(multiplyByFour);
console.log(result); // [ 4, 8, 12, 16, 20 ]
