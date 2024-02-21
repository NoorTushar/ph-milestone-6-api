const glass = {
   name: "golden glass",
   color: "golden",
   price: 12,
   isCleaned: true,
};

const keys = Object.keys(glass);

console.log(keys); // [ 'name', 'color', 'price', 'isCleaned' ]

console.log(glass[keys[0]]); // golden glass
