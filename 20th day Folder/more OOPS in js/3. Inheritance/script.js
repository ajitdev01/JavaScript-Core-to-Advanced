class Vehicle {
    move() {
        console.log("Vehicle is moving...");
    }
}

class Car extends Vehicle {
    start() {
        console.log("Car engine started 🚗");
    }
}

const c1 = new Car();
c1.start();
c1.move();
