let titel = "BraINzIMA InnOVation"

console.log(titel)

// convert to Uppercaee
console.log(titel.toUpperCase())
// convert to lowercaee
console.log(titel.toLowerCase())


//replace a character or word  - single
console.log(titel.replace("A","N"))

//replace a character or word - all
console.log(titel.replaceAll("A","N"))



// slicing a range 
console.log(titel.slice(0,9))

// split from anywhere 
let para = "NILAM , nilam23192@gmail.com , 16 , Bettiha"
console.log(para)
console.log(para.split(","))

// access any single data
let userDetils =  para.split(",")
console.log(userDetils[0])
console.log(userDetils[1])
console.log(userDetils[2])
console.log(userDetils[3])
