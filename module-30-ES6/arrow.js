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

// more examples:

// 4

const getName = (person) => person.name;

const student = { name: "Naruto", age: 18 };

console.log(getName(student)); // output: Naruto

// 5 (large arrow function)

const doMath = (num1, num2, num3) => {
   const sum = num1 + num2 + num3;
   const mult = num1 + num2 + num3;

   return sum + mult;
};

console.log(doMath(1, 2, 3)); // 12
