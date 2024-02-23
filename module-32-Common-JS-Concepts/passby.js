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
// this is because, this is a primitive data type and the value
// was passed inside as the argument. (not the reference)

/******* Case 2: For Non Primitive Data Types *********/

let pairOne = { male: "Jack", female: "Rose" };
let pairTwo = { male: "Tahsan", female: "Mithila" };

function updateCouple(one, two) {
   two.male = "Srijit";
}

console.log(pairTwo); // { male: 'Tahsan', female: 'Mithila' }
updateCouple(pairOne, pairTwo);
console.log(pairTwo); // { male: 'Srijit', female: 'Mithila' }

// What happened in this case? We actually passed in the reference
// into the function as an argument.
// so the function is changing the reference.
