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
