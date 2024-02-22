// how to Create a Class and Objects from the Class

class Person {
   constructor(id, name, age, subject) {
      this.id = id;
      this.name = name;
      this.age = age;
      this.subject = subject;
   }
}

const student1 = new Person(1, "Tushar", 18, "MERN");
const student2 = new Person(2, "Omayra", 5, "Art");
const student3 = new Person(3, "Mahdiya", 10, "Dance");
const student4 = new Person(4, "Umaiza", 1, "Speaking");

console.log(student1); // Person { id: 1, name: 'Tushar', age: 18, subject: 'MERN' }
console.log(student2); // Person { id: 2, name: 'Omayra', age: 5, subject: 'Art' }
console.log(student3); // Person { id: 3, name: 'Mahdiya', age: 10, subject: 'Dance' }
console.log(student4); // Person { id: 4, name: 'Umaiza', age: 1, subject: 'Speaking' }
