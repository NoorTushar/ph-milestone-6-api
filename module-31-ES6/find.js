// find is similar to filter, just one difference is that whenever a condition is met, it will only return that first value

const numbers = [1, 2, 3, 4, 5, 6, 7];

const even = numbers.find((el) => {
   return el % 2 === 0;
});

console.log(even); // 2
