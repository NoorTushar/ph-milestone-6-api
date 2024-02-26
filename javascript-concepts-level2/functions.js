var x = 1;
a();
b();
console.log(x);

function a() {
   var x = 10;
   console.log(x);
}

function b() {
   var x = 100;
   console.log(x);
}

/**
 * At the very first time before even running the code, the JavaScript engine
 * skims through the whole code first time.
 * It creates a global "Execution Context".
 * Execution Context has two parts -
 * 1. Memory - Variable
 * 2. Code - Thread of Execution
 *
 * 1. Memory Phase:
 *
 * x = undefined
 * a = function{....}
 * b = function{....}
 *
 * 2. Execution Phase:
 * Line1: x = 1
 * Line2: New Execution Context is created
 *
 *      Memory Phase:
 *      x = undefined
 *
 *      Execution Phase
 */
