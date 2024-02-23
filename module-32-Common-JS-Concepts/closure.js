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

// here we took access of total outside its scope right?
// the total is "capturing" value from outside its scope.

console.log(addToTotal2(4)); // 4
console.log(total2); // 4
console.log(addToTotal2(10)); // 14
