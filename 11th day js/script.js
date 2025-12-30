// hw - take five Number subject as varible and display the divison
// above = 300 - 1st
// above = 225 - 2nd
// above = 150 - 3rd
// Below = 150 - fail


// simple way 
// let math = 29
// let hindi = 29
// let english = 29
// let ssc= 29
// let sc = 29
// let total_marks = (math+hindi+english+ssc+sc)


// if(total_marks>=300){
//     console.log("frist")
// }else if(total_marks>=225){
//     console.log("Second")
// }else if(total_marks>=150){
//     console.log("Thrid")
// }else if(total_marks<=149){
//     console.log("Sorry Next Time Try")
// }else{
//     console.log("Please Enter vaild number")
// }



// // pro ways
// // simple way 
// let math = 59
// let hindi = 60
// let english = 60
// let ssc = 60
// let sc = 60
// let total_marks = (math + hindi + english + ssc + sc)
// let div


// if (total_marks >= 300) {
//     div = "Frist"
// } else if (total_marks >= 225) {
//     div = "Second"
// } else if (total_marks >= 150) {
//     div = "Third"
// } else if (total_marks <= 149) {
//     div = "sorry next time try "
// } else {
//     div = "Enter valid "
// }

// document.writeln(`
//     Marks with Subject :<br>
//     Math = ${math} <br>
//     English = ${english} <br>
//     Hindi = ${hindi} <br>
//     Socal Science = ${ssc} <br>
//     Science = ${sc} <br>
//     *********************<br>
//     Total Marks = ${total_marks}<br>
//     Diviosn = ${div}

//     `)




/// profenal way of 
// pro ways
// simple way 
let math = parseInt(prompt("Enter The marks Math :- "))
let hindi = parseInt(prompt("Enter The marks Hindi :- "))
let english = parseInt(prompt("Enter The marks English :- "))
let ssc = parseInt(prompt("Enter The marks Socal Science :- "))
let sc = parseInt(prompt("Enter The marks Science :- "))
let total_marks = (math + hindi + english + ssc + sc)
let div

if (math < 30 || hindi < 30 || english < 30 || ssc < 30 || sc < 30) {
    div = "Sorry Try next time"
} else if (total_marks >= 300) {
    div = "Frist"
} else if (total_marks >= 225) {
    div = "Second"
} else if (total_marks >= 150) {
    div = "Third"
} else if (total_marks <= 149) {
    div = "sorry next time try "
} else {
    div = "Enter valid "
}

document.writeln(`
    Marks with Subject :<br>
    Math = ${math} <br>
    English = ${english} <br>
    Hindi = ${hindi} <br>
    Socal Science = ${ssc} <br>
    Science = ${sc} <br>
    *********************<br>
    Total Marks = ${total_marks}<br>
    Diviosn = ${div}
    
    `)
