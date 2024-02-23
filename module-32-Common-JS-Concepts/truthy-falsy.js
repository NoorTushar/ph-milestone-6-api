/**
 *** Truthy Values:
 * 1. true, let x = true
 * 2. any number positive or negative, except 0
 * 3. any string value, apart from empty string, let x = "Tushar"
 * 4. empty object, let x = { }
 * 5. empty array, let x = [ ]
 *
 *** Falsy Values:
 *
 * 1. false , let x = false
 * 2. 0 , let x = 0
 * 3. empty string, let x = ""
 * 4. any undefined value, let x;
 * 5. null value, let x = null;
 * 6.
 */

/*** Some other use cases ***/

// Case:1
// In many cases, we want to run a conditional if the case is falsy
// In that case we can write the conditional like this:

let x; // this is a falsy value

if (!x) {
   console.log(`I know I am falsy. But I ran the code.`);
}

// output: I know I am falsy. But I ran the code.

// Case:2
// to check truthy use double bang "!!"

let y = []; // this is a truthy value

if (!!y) {
   console.log(`I am truthy`); // output: I am truthy
}
