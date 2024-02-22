// data access

// case 1:
const data = [{ name: "Noor", age: 16, address: "Bangladesh" }];

// to fetch the address:
console.log(data[0].address); // Bangladesh

// case 2:
const products = {
   count: 5000,
   data: [
      {
         id: 1,
         name: "lenovo",
         price: 5500,
      },
      {
         id: 2,
         name: "macbook",
         price: 9500,
      },
   ],
};

// get the price of the second product

console.log(products.data[1].price); // 9500

// case 3:

const user = {
   id: 5001,
   name: "Alan",
   address: {
      street: {
         first: "52/1, Alan Lane",
         second: "Highway Street",
         third: "North City",
      },
      city: "Dhaka",
   },
};

// we want to access the second street of the user

console.log(user.address.street.second); // Highway Street

// case 4: OPTIONAL CHAINING `?`

// suppose we are trying to read a value of a property which does not exist, in that case instead of throwing errors, we can have undefined as our answer.

console.log(user.address.naiEta?.second); // undefined

// note that we have used a Question Mark after the property name.
