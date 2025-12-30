// Loops controls:
// 1. for-loop 
// 2. while loop 
// 3. do-while loop 
// 4. foreach loop ----Array

// for loop syntax 
// for (initialization; condition; increment/decrement) {
//     statement
// }


// print I love YOU 100 times 
for (let i = 1; i <= 100; i++) {
    console.log(`I LOVE YOU NILAM ${i}`)
}


// lets take number variable having any number and display it's table

// solution without loop
let number = 8796
document.writeln(`
    ${number * 1} <br>
    ${number * 2} <br>
    ${number * 3} <br>
    ${number * 4} <br>
    ${number * 5} <br>
    ${number * 6} <br>
    ${number * 7} <br>
    ${number * 8} <br>
    ${number * 9} <br>
    ${number * 10} <br>
    `)

// solution with loop

let userTable = parseInt(prompt("Enter The need You Number Tables:- "))
for(let i = 1;i<=10;i++){
    console.log(`${i} X ${userTable} = ${userTable*i}`)
}

// take a vaiable having number and display the sum from 0 to that number
let userCountNumbers = parseInt(prompt("Enter The need You Number Counts Numbers:- "))
let sum = 0;
for(let i = 0;i<=userCountNumbers;i++){
    sum += i
}
console.log(`${sum}`)









