/**
 * Ternary
 * Shortcut AND OR
 */

const money = 80;
/*** Traditional If Else - 6 lines ***/
/*
let food;

if (money < 100) {
   food = "Cha Biscuit";
} else {
   food = "Biriyani";
}
*/

/*** Ternary Operator - 1 line ***/
let food = money < 100 ? "Cha Biscuit" : "biriyani";
console.log(food); // 'Cha Biscuit'

/*** Ternary Operator - Multiple Conditions ***/
const marks = 78;
let result = marks >= 70 && marks < 80 ? "B" : "A";
console.log(result); // 'B'

/*** Shortcut number to String ***/
const num1 = 99;
const num1Str = num1 + "";
console.log(num1Str); // '99'

/*** Shortcut String to Number ***/
const num2Str = "88";
const num2 = +num2Str;
console.log(num2); // 88

/*** More Ternary ***/
let isActive = true;

const showUser = () => {
   console.log(`Show User`);
};
const hideUser = () => {
   console.log(`Hide User`);
};

isActive ? showUser() : hideUser(); // 'Show User'

/*** Shortcut AND - left condition has to be true 
to execute right side ***/

isActive && showUser(); // 'Show User'

/*** Shortcut OR - left condition has to be false 
to execute right side ***/

isActive || hideUser(); // No Output
// as the left side is truthy, right is not executed.

/*** Toggling ***/

isActive = !isActive;

console.log(isActive); // false
