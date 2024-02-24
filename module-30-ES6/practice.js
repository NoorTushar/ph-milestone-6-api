/*
1. let const
2. template string
2.a: use variable
2.b: use object  property
3. arrow function
3.a. with one parameter. will return the number after dividing by 5
3.b. with two parameters. will add two to each number and then multiply the result.
3.c. three parameters. will multiply all three parameters
3.d. with two parameters but it will be a multi line arrow function. will add two to each number and then multiply the result.
make sure you return the result
4. [home work]: javascript function declaration vs arrow function
5. array of numbers. and then map to get each elements multiplied by 5. must use arrow function
6. [challenging] numbers of array. get odd numbers by using filter with arrow function
7. [challenging] array of objects (e.g. products). use find to get the object with price 5000.
8. You have an object. Now use destructing to create a simple variable of any property of the object.
9. [challenging] You have an array. Now use destructing to create a simple (or more) variable to get the third element of the array in a variable called 'three'.
10. [optional] just a write a function with three parameters. and the last parameter will have a default parameter with value 7.
this function will take three parameters and will return the sum of all the three parameters.
*/

//1. Var, Let and Const

/*

Var, let, and const are all used for variable declaration in JavaScript, but they have some key differences in terms of scoping, reassignment, and immutability. Let's break down the differences:

    var:
        * Scope: Variables declared with var have function-level scope. This means they are accessible throughout the function in which they are declared, even if they are declared within a block (e.g., if, for, while).
        * Reassignment: Variables declared with var can be reassigned and updated.
        * Hoisting: Variables declared with var are hoisted to the top of their containing function or global scope during the compilation phase.
        * Example:

        function example() {
            var x = 5;
            if (true) {
                var y = 10;
                console.log(x); // Output: 5
            }
            console.log(y); // Output: 10
        }

let:

    * Scope: Variables declared with let have block-level scope. This means they are only accessible within the block (e.g., if, for, while) in which they are declared.
    * Reassignment: Variables declared with let can be reassigned but not redeclared within the same block scope.
    * Hoisting: Variables declared with let are hoisted to the top of their containing block, but they are not initialized. Accessing them before the declaration results in a ReferenceError.
    * Example:
        function example() {
            let x = 5;
            if (true) {
                let y = 10;
                console.log(x); // Output: 5
            }
            console.log(y); // ReferenceError: y is not defined
        }

const:

    * Scope: Variables declared with const also have block-level scope.
    * Reassignment: Variables declared with const cannot be reassigned once they are initialized. However, for objects and arrays, the values they hold can still be modified.
    * Hoisting: Like let, variables declared with const are hoisted to the top of their containing block, but they are not initialized. Accessing them before the declaration results in a ReferenceError.
    * Example:
    
        function example() {
            const x = 5;
            if (true) {
                const y = 10;
                console.log(x); // Output: 5
            }
            console.log(y); // ReferenceError: y is not defined
        }

In summary:

    * Use var if you need variables with function-level scope and/or need hoisting.
    * Use let if you need variables with block-level scope and/or need reassignment.
    * Use const if you need variables with block-level scope, do not need reassignment, and/or want to enforce immutability for primitive values.
*/
