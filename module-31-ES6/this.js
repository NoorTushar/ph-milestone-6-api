const person = {
   name: "Tushar",
   age: 18,
   isMale: true,
   english: 88,
   math: 95,
   science: 94,
   prop: this, // global scope // so will be WINDOW

   getName: function () {
      console.log(this);
      return this.name; // who is calling the function?
      // person is calling the getName function
      // so here this will be PERSON
   },

   // now let us use arrow function

   getNameArrow: () => {
      console.log(this);
      return this.name;
   },
};

console.log(person.prop); // window object

console.log(person.getName()); // person + Tushar
console.log(person.getNameArrow()); // WINDOW + undefined

// Let us see the usecase in Class

class Person {
   constructor(id, name, age, subject) {
      this.id = id;
      this.name = name;
      this.age = age;
      this.subject = subject;
   }

   sleep() {
      console.log(`The person ${this.name} is sleeping`);
      // here the function is called by Person. So this will be the Person
      // and Person.name will be whatever value will be given in the name
   }
}

const naruto = new Person("001", "naruto", 18, "Hokage");
console.log(naruto); // Person { id: '001', name: 'naruto', age: 18, subject: 'Hokage' }

naruto.sleep(); // The person naruto is sleeping

// Problem in using 'this' in Classes

const lazy = naruto.sleep;
lazy(); // Cannot read properties of undefined (reading 'name')

// because? check chatgpt or others
/**
 * amar mone hoye because akhon lazy akta function and window ore call
 * kortese. so window.name ashole nai.
 * Window object er bhitore name ta nai. Sure na ami check again.
 */
