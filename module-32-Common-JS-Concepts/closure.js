// Closure: Akta function arekta function ke return kore

function stopWatch() {
   let count = 0;
   return function () {
      count = count + 1;
      return count;
   };
}

console.log(stopWatch()); // [Function (anonymous)]
// the stopWatch() function is returning us a function

const watchOne = stopWatch();
console.log(watchOne); // [Function (anonymous)]

// we see that watchOne has become a function itself.
// we know how to call a function, thus:

console.log(watchOne()); // 1
console.log(watchOne()); // 2
console.log(watchOne()); // 3
console.log(watchOne()); // 4

// but why? and how?

// one thing you have been using all the time

// case 01 - a
let total = 0;
function addToTotal(a) {
   return a + total;
}
// here we took access of total outside its scope right?
// the total is "capturing" value from outside its scope.

console.log(addToTotal(4)); // 4
console.log(total); // 0
console.log(addToTotal(10)); // 10

// case 02 - b  (will do everything same apart from:)

let total2 = 0;
function addToTotal2(a2) {
   total2 = total2 + a2;
   return total2;
}

// here we took access of total2 outside its scope right?
// the total2 is "capturing" value from outside its scope.

console.log(addToTotal2(4)); // 4
console.log(total2); // 4
console.log(addToTotal2(10)); // 14

// Gias Bhai Video

// case 1: normal use case
function sum() {
   let counter = 0;
   counter++;
   console.log(counter);
}

sum(); // 1
sum(); // 1
sum(); // 1

// case 2: if the counter was outside the function scope?
let counter = 0;
function sum2() {
   counter++;
   console.log(counter);
}

sum2(); // 1
sum2(); // 2
sum2(); // 3

// case3: now let us return a function inside this function

const sum3 = () => {
   let counter = 0;

   return () => {
      counter++;
      console.log(counter);
   };
};

const result = sum3();
console.log(result); // in the console we can see a function being returned
// so the result variable is a function now.

// we can call a function..

result(); // output: 1
result(); // output: 2
result(); // output: 3

console.dir(result); // we will see it has 'CLOSURE' in it's scope with
// counter : 3

/**
 * Now what is happening actually. When we are calling the result() function
 * it is actually calling the inner function. And JavaScript understands
 * that the inner function needs counter variable.
 * So JS keeps counter variable for the inner function to use.
 * Thus forming a closure.
 * See below example where no closure is formed.
 */

const sum4 = () => {
   let counter = 0;

   return () => {
      console.log("Hello");
   };
};

const result4 = sum4();

result4(); // Hello
result4(); // Hello
result4(); // Hello

console.dir(result4); // we will see it has no CLOSURE scope.
