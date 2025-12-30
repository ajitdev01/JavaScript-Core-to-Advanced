// let name = prompt("Enter Your Name?")
// console.log(name)
// document.writeln(name)



// // take name and age user and display iser is audlt or not
// let userName = prompt("Enter Your Name Sir/Mam")
// let age =parseInt( prompt("Enter Your Age sir/mam"))
// if(age>=18){
//     document.writeln(`Hey Sir/Mam ${userName} And Your Age is ${age} .. You are adult and Can Vote`)
// }else{
//     document.writeln(`Hey Sir/Mam ${userName} And Your Age is ${age} .. You are adult and Can't Vote`)
// }



// //take two numbers from the user and display it's sum
// let num1 = parseInt(prompt("Enter Frist Number :- "))
// let num2 = parseInt(prompt("Enter Second Number :- "))
// document.writeln(`Sum of ${num1} and ${num2} is ${num1+num2}`)






// take two numbers and what-to-do and display its result
let num1 = parseInt(prompt("Enter Frist Number :- "))
let num2 = parseInt(prompt("Enter Second Number :- "))
let task = prompt("Enter What to do with numbers :(Add / Sub/Product/Divison ) :- ")
let result;
switch (task){
    case "add":
        result = num1+num2
        break;
    case "sub":
        result = num1-num2
        break;
    case "product":
        result = num1*num2
        break;
    case "divison":
        result = num1/num2
        break;
    default:
        result = "Invaild Task !"
        break;
}

document.writeln(`Frist Number = ${num1} <br>
                  Second Number = ${num2}<br>
                  Task = ${task}  <br> 
                  Result = ${result}  `)





