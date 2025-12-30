class Car {
    startEngine() {
        this.#fuelCheck();
        console.log("Engine started ✅");
    }

    #fuelCheck() { // private function
        console.log("Fuel OK ⛽");
    }
}

const c = new Car();
c.startEngine();
