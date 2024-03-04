const person = { name: "Tushar", age: 16, isDeveloper: true };

const personString = JSON.stringify(person);

localStorage.setItem("person", personString);

console.log(localStorage.getItem("person"));

// output: {"name":"Tushar","age":16,"isDeveloper":true}

console.log(JSON.parse(personString));

// output: {name: 'Tushar', age: 16, isDeveloper: true}
