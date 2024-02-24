// Global scope
var globalVariable = "I'm a global variable";

function outerFunction() {
   // Outer function scope
   var outerVariable = "I'm an outer variable";

   function innerFunction() {
      // Inner function scope
      var innerVariable = "I'm an inner variable";
      console.log(globalVariable); // Accessible - prints "I'm a global variable"
      console.log(outerVariable); // Accessible - prints "I'm an outer variable"
      console.log(innerVariable); // Accessible - prints "I'm an inner variable"
   }
   innerFunction();
}

outerFunction();

/*
In this example, outerFunction() contains innerFunction(). Each function has its own scope. innerFunction() can access variables declared in outerFunction() and variables declared globally because of lexical scope. However, variables declared inside innerFunction() are not accessible outside of it.

This illustrates how lexical scope works in JavaScript. The inner functions have access to the variables declared in their outer functions and the global scope, but not vice versa.
*/
