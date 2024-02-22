const numbers = [1, 2, 3, 4, 5];

// Case1: use anonymous function

numbers.forEach((eachItem) => {
   console.log(eachItem); // 1 2 3 4 5
});

// Case2: pass a function instead of writing an anonymous function

const readAll = (items) => {
   console.log(items); // 1 2 3 4 5
};

numbers.forEach(readAll);

// Case3: use forEach to an array consisting objects.

const students = [
   { name: "Naruto", age: 18 },
   { name: "Minato", age: 48 },
   { name: "Kushina", age: 45 },
];

students.forEach((item) => {
   console.log(item.name); //  Naruto Minato Kushina
});
