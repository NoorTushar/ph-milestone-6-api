/**
 * 8 ways to get undefined
 *
 * 1. if we declare a variable but `with no value`
 * 2. if we do not `return` anything out of a function
 * 3. if we do not give arguments to function parameters
 * 4. if we return from function but does not mention what we are returning
 * 5. when we access property in an object which does not exist.
 * 6. when we try to get a value from an array with an index that does not exist.
 * 7. when we explicitly delete a value from an array.
 * NOTE: we should use splice instead
 * 8. when we declare a variable with the value 'undefined'
 * NOTE: do not use this to declare emptiness. You should use null instead.
 *
 * NULL usecase:
 * 1. if we want to explicitly say that the value is missing/ null
 * 2. if we want to say that value of a property does not have a value
 *
 * TYPE OFFS:
 * 1. undefined has a type of = undefined;
 * 2. null has a type of = object;
 */

// 1.
let randomVariable;
console.log(randomVariable); // undefined

// 2.
function add(a, b) {
   const total = a + b;
}
console.log(add(4, 2)); // undefined

// 3.
function show(a) {
   return a;
}
console.log(show()); // undefined

// 4.
function hello(a) {
   return;
}

console.log(hello("Tushar")); // undefined

// 5.
const singer = { name: "asif", origin: "Bangladeshi" };
console.log(singer.name, singer.height); // asif undefined

// 6.
const numbers = [12, 3, 4, 6];
console.log(numbers[3], numbers[4]); // 6 undefined

// 7.
delete numbers[3];
console.log(numbers); // [ 12, 3, 4, <1 empty item> ]

// 8.
const myName = undefined;
console.log(myName); // undefined
// do not use this to set undefined value, use NULL instead.

// NULL

// 1.
const height = null;

// 2.
const data = { routes: [], update: null };
