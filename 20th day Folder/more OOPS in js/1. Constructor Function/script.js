function Car(name, model, color) {
    this.name = name;
    this.model = model;
    this.color = color;

    this.start = function() {
        console.log(`${this.name} is starting...`);
    }
}

const car1 = new Car("Fortuner", "2024", "Black");
const car2 = new Car("Thar", "2023", "White");

car1.start();
car2.start();
