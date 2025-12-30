class Animal {
    sound() {
        console.log("Animal makes sound");
    }
}

class Dog extends Animal {
    sound() {
        console.log("Dog barks 🐕");
    }
}


class cat extends Animal{
    sound(){
        console.log("Cat Meo Meo 🐈")
    }
}


const a = new Animal();
const d = new Dog();

a.sound();
d.sound(); // overridden


const cata = new Animal();
const catb = new cat();

cata.sound()
catb.sound()