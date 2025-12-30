// make three number and who largest number 

// let num1 = parseFloat(prompt("Enter Number 1"))
// let num2 = parseFloat(prompt("Enter Number 2"))
// let num3 = parseFloat(prompt("Enter Number 3"))

// if(num1 > num2 && num1 >num3){
//     document.writeln(`The Number one is ${num1} is the largest number amonge the numbers ${num1} ,${num2},${num3}.`)
// }else if(num2 > num1 && num2 >num3){
//     document.writeln(`The Number two is ${num2} is the largest number amonge the numbers ${num1} ,${num2},${num3}.`)
// }else if(num3 > num1 && num3 >num2){
//     document.writeln(`The Number three is ${num3} is the largest number amonge the numbers ${num1} ,${num2},${num3}.`)
// }else{
//     document.writeln(`All numbers are same ${num1 }, ${num2},${num3}`)
// }


// my logic
// make three number and find largest number

let num1 = parseFloat(prompt("Enter Number 1"));
let num2 = parseFloat(prompt("Enter Number 2"));
let num3 = parseFloat(prompt("Enter Number 3"));

if(num1 > num2 && num1 > num3){
    document.writeln(`Number 1 (${num1}) is the largest among ${num1}, ${num2}, ${num3}.`);
}
else if(num2 > num1 && num2 > num3){
    document.writeln(`Number 2 (${num2}) is the largest among ${num1}, ${num2}, ${num3}.`);
}
else if(num3 > num1 && num3 > num2){
    document.writeln(`Number 3 (${num3}) is the largest among ${num1}, ${num2}, ${num3}.`);
}
else if(num1 === num2 && num1 > num3){
    document.writeln(`Number 1 and Number 2 are equal and largest (${num1}, ${num2}) among ${num1}, ${num2}, ${num3}.`);
}
else if(num1 === num3 && num1 > num2){
    document.writeln(`Number 1 and Number 3 are equal and largest (${num1}, ${num3}) among ${num1}, ${num2}, ${num3}.`);
}
else if(num2 === num3 && num2 > num1){
    document.writeln(`Number 2 and Number 3 are equal and largest (${num2}, ${num3}) among ${num1}, ${num2}, ${num3}.`);
}
else {
    document.writeln(`All numbers are equal: ${num1}, ${num2}, ${num3}`);
}
