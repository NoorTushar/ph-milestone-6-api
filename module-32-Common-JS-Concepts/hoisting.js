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
