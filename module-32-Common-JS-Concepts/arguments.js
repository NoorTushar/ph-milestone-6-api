// let's say we created a function and declared 3 parameters

function sum(a, b, c) {
   console.log(a + b + c);
   console.log(arguments);
   console.log(arguments["1"]); // 2

   for (arg in arguments) {
      console.log("for in loop", arguments[arg]); // working
   }

   for (arg of arguments) {
      console.log("for of loop", arg); // working
   }

   // we can covert this arguments into an array by spread
   const args = [...arguments];
   console.log(args); // [ 1, 2, 3, 4, 5, 6 ]
}
sum(1, 2, 3); // 6
console.log("length", sum.length); // 3
// the length of the function is equal to how many parameters assigned

// now what if we have given more arguments than 3?

sum(1, 2, 3, 4, 5, 6);

// everything will be stored inside special variable named `arguments`
// [Arguments] { '0': 1, '1': 2, '2': 3, '3': 4, '4': 5, '5': 6 }
// this is called an array like object.
// looks like an array but is an object.
// this `arguments` is only available inside functions
