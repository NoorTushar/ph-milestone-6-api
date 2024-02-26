const user = { id: 1, name: "Noor Tushar", job: "developer" };

// the above is a javascript object.

// JSON - JavaScript Object Notation

// to convert from JavaScript object to a JSON string:
// use JSON.stringify()

const userString = JSON.stringify(user);
console.log(user);
// { id: 1, name: 'Noor Tushar', job: 'developer' }
console.log(userString);
// {"id":1,"name":"Noor Tushar","job":"developer"}
