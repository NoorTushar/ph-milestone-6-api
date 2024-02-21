/*** 1. Expecting Number - Default param usually 0 ***/

function add(num1, num2 = 0) {
   console.log(num1 + num2);
}
add(2, 3); // output: 5
add(2); // output: 2

/*** 2. Expecting String - Default param usually empty string ***/

function fullName(firstName, lastName = "") {
   console.log(`${firstName} ${lastName}`);
}
fullName("Tushar", "Khan"); // Tushar Khan
fullName("Tushar"); // Tushar

/*** 3. Expecting Array - Default param usually empty array ***/

function fruits(array = []) {
   console.log(array);
}
fruits(["Mango", "Apple"]); // [ 'Mango', 'Apple' ]
fruits(); // [ ]

/*** 4. Expecting Object - Default param usually empty object ***/

function human(object = {}) {
   console.log(object);
}
