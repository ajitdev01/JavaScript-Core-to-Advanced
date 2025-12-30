// // syntax 
// if(condtion){
//     // statement if ture
// }else{
//     // statement if false
// }

// Program 1 : vote checker
let age = 17;
if(age >= 18){
    document.writeln(`Your age is ${age}, so you can vote ✅`);
}else {
    document.writeln(`Your age is ${age}, so you can't vote ❌`);
}


// Program 2 : leap year checker
let year = 2028;
if(year % 4 === 0){
    document.writeln(`<br>The year ${year} is a leap year ✅`);
}else{
    document.writeln(`<br>The year ${year} is not a leap year ❌`);
}


// Program 3 : Odd / Even checker
let number = 100;
if(number % 2 == 0){
    document.writeln(`<br>The number ${number} is an Even number ✅`);
}else{
    document.writeln(`<br>The number ${number} is an Odd number ❌`);
}
