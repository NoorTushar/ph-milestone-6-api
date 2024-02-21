const glass = {
   name: "golden glass",
   color: "golden",
   price: 12,
   isCleaned: true,
};

// 01. To get the keys

const keys = Object.keys(glass);

console.log(keys); // [ 'name', 'color', 'price', 'isCleaned' ]

console.log(glass[keys[0]]); // golden glass

// 02. To get the values

const values = Object.values(glass);
console.log(values); // [ 'golden glass', 'golden', 12, true ]

// 03. To create an array of keys and values: Two Dimensional Array

const pairs = Object.entries(glass);

console.log(pairs);

/*

[
  [ 'name', 'golden glass' ],
  [ 'color', 'golden' ],
  [ 'price', 12 ],
  [ 'isCleaned', true ]
]

*/

// 04. Delete a property using delete keyword

delete glass.isCleaned;

console.log(glass); // { name: 'golden glass', color: 'golden', price: 12 }

// 05. Create a new object by Destructuring

const { price, ...restGlass } = glass;

console.log(restGlass); // { name: 'golden glass', color: 'golden' }

// 06. Freeze an Object. You cannot do anything.

Object.freeze(glass);

glass.source = "Bangladesh";
delete glass.name;
glass.color = "red";
console.log(glass); //{ name: 'golden glass', color: 'golden', price: 12 }

// Notice that no changes took place.
