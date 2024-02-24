// using var to declare variable creates a problem called hoisting
// what it does is, it becomes accessible throughout its host's scope.

/**********************/
// case 1:

function sum(a, b) {
   let total = a + b;

   if (total > 10) {
      var sum = total + 55;
   }

   console.log(sum); // 71
}

sum(8, 8);
console.log(sum); // error // cause it is called outside it's host.

/**********************/
// case 2: function

// when we declare the function using function keyword, it hoists to the top.
// we can call the function before the initialization line.
// this is hoisting

sayFive(); // Hi. I am five function.

function sayFive() {
   console.log(`Hi. I am five function.`);
}

// but now,

saySix(); // Cannot access 'saySix' before initialization

const saySix = () => console.log(`Hi. I am six function.`);

/**********************/
// Case 3:

function fun1() {
   console.log(`i am fun1`);

   function fun2() {
      console.log(`i am fun 2. created inside fun1`);
   }

   fun2();
}

fun1();
// Output:
// i am fun1
// i am fun 2. created inside fun1

// but if we want to call fun2() from outside the host.
fun2(); // fun2 is not defined

/**********************/
// Case 4: Weird Case.
// What if we assign a function using var keyword? Will it be hoisted?

console.log(fun4); // undefined

fun4(); // fun4 is not a function. **[LIKE WHAT??? WHY?]

var fun4 = () => {
   console.log(`hi i am function 4`);
};

// because in this case, the variable name is hoisted
// and not the function body.
// so the variable name which is hoisted is saying undefined.
// and the later part, which is the function body, is said not
// to be a function.

/***** chat gpt *****/

/**

Imagine you're baking a cake. Before you start mixing ingredients, you might gather all your tools and lay them out on the counter. Hoisting in JavaScript is kind of like that - it's a behavior where variable and function declarations are moved to the top of their containing scope during the compilation phase, just like laying out your tools before you start baking.

Let's see how hoisting works with variables and functions:

    Variables Hoisting:

    When JavaScript code is run, variable declarations (not assignments) are moved to the top of their containing scope. However, their assignments stay where they are. This means you can use a variable before it's declared in the code.

   console.log(x); // Output: undefined

   var x = 5;

   In the above code, even though x is logged before it's assigned a value, it doesn't throw an error. That's because the declaration var x; is hoisted to the top, making x available throughout the entire scope, but its value is undefined until the assignment x = 5; is encountered.

   Function Hoisting:
   Function declarations are also hoisted to the top of their containing scope, so you can call functions before they appear in the code.

   sayHello(); // Output: "Hello, world!"

      function sayHello() {
         console.log("Hello, world!");
      }

   Here, sayHello() is called before the function declaration appears. Still, it works because the function declaration function sayHello() {...} is hoisted to the top of the scope.

   Now, regarding the relationship between hoisting and scopes:

    Hoisting happens within scopes. Variable and function declarations are hoisted to the top of their containing function or global scope.
    Hoisting can affect how variables and functions are accessed within their scopes. For example, a variable declared with var is hoisted to the top of its function or global scope, making it accessible throughout that scope. However, its value will be undefined until its assignment is reached in the code.

   In essence, while hoisting and scopes are related in that hoisting affects how variables and functions are treated within their scopes, they're not the same thing. Scopes determine where variables and functions are accessible, while hoisting describes the behavior of moving declarations to the top of their containing scopes during compilation.


 */
