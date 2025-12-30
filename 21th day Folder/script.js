// for multiple values in one variable we have to define array

// method  1
let names = ["Ajeet","Nilam","Rahul","Mam","Sir"]
document.writeln(names)
console.log(names)
document.writeln("<br>")

// method 2 
let cityes = []
cityes[0] = "KATIHAR"
cityes[1] = "BHAGALPUR"
cityes[2] = "PURNIA"
cityes[3] = "BETTIHA"
cityes[4] = "WEST CHAMPRAN"

document.writeln(cityes)
console.log(cityes)
document.writeln("<br>")


// method 3
let states = new Array("Ajeet","Nilam","Rahul","Mam","Sir")
document.writeln(states)




// Accessing the data of array by its index number which starts from 0
document.writeln("<br>")
document.writeln(names[1])