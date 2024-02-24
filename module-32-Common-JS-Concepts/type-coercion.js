/**
 * Type Coercion / Type Conversion / Type Casting
 * `==`, the values are converted into booleans
 * let's say, x = true, it means x = 1
 * let's say, a = false, b = '0', a == b // output true.
 * what happened? '0' was truthy but the 0 inside is falsy.
 *
 *
 * in ==
 * in same type, the values will be checked
 * if the types are different, the types will be converted/ casted
 * then checked.
 */

/**
 * when comparing objects or arrays
 */

// Case1: Objects

const x = { name: "Tushar" };
const y = { name: "Tushar" };

console.log(x == y, x === y); // false false

// Why? Because they are pointing to different reference points

// Case2: Arrays

const a = [];
const b = [];

console.log(a == b, a === b); // false false

// Why? Because they are pointing to different reference points

/*


    Number vs String Comparison:



console.log(5 == "5"); // Output: true (JavaScript coerces string "5" into a number)
console.log(5 === "5"); // Output: false (Strict equality operator doesn't perform type coercion)

In the first comparison (5 == "5"), JavaScript coerces the string "5" into a number and then checks for equality, resulting in true. However, in the second comparison (5 === "5"), the strict equality operator === doesn't perform type coercion, so it returns false.

    Boolean vs Number Comparison:



console.log(true == 1); // Output: true (JavaScript coerces boolean true into number 1)
console.log(false == 0); // Output: true (JavaScript coerces boolean false into number 0)

Here, JavaScript coerces the boolean values true and false into numbers (1 and 0, respectively) and then checks for equality, resulting in true for both comparisons.

    Boolean vs String Comparison:



console.log(true == "true"); // Output: false (No coercion for this comparison, as they're different types)
console.log(false == "false"); // Output: false (No coercion for this comparison, as they're different types)

In these comparisons, JavaScript doesn't perform type coercion because the types are different. So, both comparisons return false.

    Undefined vs Null Comparison:



console.log(undefined == null); // Output: true (JavaScript considers them loosely equal)
console.log(undefined === null); // Output: false (Strict equality operator doesn't perform type coercion)

JavaScript considers undefined and null loosely equal (==), so the first comparison returns true. However, the strict equality operator === doesn't perform type coercion, so the second comparison returns false.

These examples demonstrate how JavaScript performs type coercion in different comparison scenarios. It's crucial to understand this behavior to avoid unexpected results in your code. Using strict equality (===) instead of loose equality (==) can help prevent unintended type coercion.

*/
