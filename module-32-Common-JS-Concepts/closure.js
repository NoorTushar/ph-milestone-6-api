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
