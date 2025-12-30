let carName = "Fouturne"
let carModel = "New n60"
let carBrand = "Tyota"
let carColor = "Black"

const car = {
    name:"Foutrne",
    model:"n60",
    brand:"Tyota",
    color:"Black"
}
// not acces 
document.writeln(car)
// way2
document.writeln(car['name'] +"<br>")
// way3
document.writeln(car.model +"<br>")


const bike = {
    name :"KTM ",
    model:"DUKE 390",
    Start:function(){
        document.writeln("<br> Bike is now Started")
    },
    drive:function(){
        document.writeln("<br> Bike is Beig drive")
    },
    brake:function(){
        document.writeln("<br> breake Lag chuka hai")
    },
    stop:function(){
        document.writeln("<br> Bike has Been stoped....")
    },
    fuel:function(){
        document.writeln("<br> Petrol dal rha h")

    }

}

console.log(bike)
bike.Start()
bike.brake()
bike.fuel()
bike.stop()
bike.drive()