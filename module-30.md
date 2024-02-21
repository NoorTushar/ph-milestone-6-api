# Spread Operators

Advantages

-  case 1: using `...` to get only the values from an array
-  case 2: to copy array
-  case 3: create a parameter to take infinite inputs

# Destructuring

```js
// Case1: Object Destructuring

const person = {
   name: "Naruto",
   age: 20,
   hairColor: "yellow",
   isHokage: true,
};

// assign the values to variables using less code
// the new variable names must match the 'key' names

const { name, age, hairColor, isHokage } = person;

console.log(name); // Naruto
console.log(age); // 20
console.log(hairColor); // yellow
console.log(isHokage); // true

// Case 2: Now what if we want to change the variable name?
// ALIAS Name:

// const { original name: alias name } = object;

const { name: character } = person;

console.log(character); // Naruto

// Case3: Array Destructuring

const numbers = [1, 2, 3, 4];

const [a, b, c, d] = numbers;

console.log(a, b, c, d); // 1 2 3 4

// Example2:

function doubleThem(num1, num2) {
   return [num1 * 2, num2 * 2];
}

const [first, second] = doubleThem(2, 3);
console.log(first); // 4
console.log(second); // 6

// Case4: Skipping Items in Array Destructuring

const values = [45, 55, 65];

const [firstValue, , thirdValue] = values;

console.log(firstValue); // 45
console.log(thirdValue); // 65

// Case5: Swapping Values

let num1 = 10;
let num2 = 20;

[num1, num2] = [num2, num1];

console.log(num1); // 20
console.log(num2); // 10

// Case6: Rest(...) Operator

const [firstNum, ...secondNum] = [1, 2, 3, 4, 5, 6, 7];

console.log(firstNum); // 1
console.log(secondNum); // [ 2, 3, 4, 5, 6, 7 ]
```
