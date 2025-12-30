class Bike {
    constructor(name, model) {
        this.name = name;
        this.model = model;
    }
    
    start() {
        console.log(`${this.name} started 🏍️`);
    }

    stop() {
        console.log(`${this.name} stopped ❌`);
    }
}

const b1 = new Bike("KTM Duke", "390");
b1.start();
b1.stop();


const b2 = new Bike("Figter Get", "12000CC");
b2.start();
b2.stop();
