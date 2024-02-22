// Class 01: This is the main Class. (Baap)

class Vehicle {
   constructor(name, vehicleCost) {
      this.name = name;
      this.vehicleCost = vehicleCost;
   }
   move() {
      console.log(`Gari Chol Chol Chol`);
   }
}

const transport = new Vehicle("transport-A1", 15000);
transport.move(); // Gari Chol Chol Chol
console.log(transport.name); // transport-A1

// Class 02:
// let us create a new Class based on the previous class.

class Bus extends Vehicle {
   constructor(name, vehicleCost, seat, ticketPrice) {
      // we will use super() and use variables already created before
      super(name, vehicleCost);
      this.seat = seat;
      this.ticketPrice = ticketPrice;
   }

   // the move object created in its parent is inherited automatically
}

// let us create Bus1 using the class Bus

const bus1 = new Bus("bus-01", 20000, 50, 20);
console.log(bus1.name, bus1.vehicleCost, bus1.seat, bus1.ticketPrice);
// ouput: bus-01 20000 50 20

bus1.move(); // Gari Chol Chol Chol

// note that we did not create a move() method is Bus Class, but it already got the move() method from its parent's Class - Vehicle
