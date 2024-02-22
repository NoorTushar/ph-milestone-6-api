// Let us filter the even numbers from the array
// True hoilei Return hobe
// When only true, then that value will be returned as the new value to the new array

const numbers = [1, 2, 3, 4, 5, 6, 7];

const even = numbers.filter((el) => {
   return el % 2 === 0;
});

console.log(even); // [ 2, 4, 6 ]
