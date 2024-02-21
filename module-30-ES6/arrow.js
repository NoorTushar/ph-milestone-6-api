// Arrow Functions

// 1. this is traditional function declaration: anonymous function

function minus(a, b) {
   return a - b;
}

// 2. this is function expression: keeping it in a variable

const multiplication = function (a, b) {
   return a * b;
};

// 3. this is the ARROW function:

const sum = (a, b) => a + b;
console.log(sum(10, 20)); // output: 30
