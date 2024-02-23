let num1 = 10;
let num2 = 20;

function multiply(a, b) {
   a = 30;
   const result = a * b;
   return result;
}

console.log(multiply(num1, num2)); //output: 600

// notice that output is 600 and not 200.
// this is because at first num1 was passed inside, but then the
// value of the num1 was changed to 30. but it was inside only

// if we want to see the value of num1 outside.

console.log(num1); // output: 10 and not 30
