// let attendance = 69
// if(attendance >= 70){
//     document.writeln(`Your attendance is <span class='green'>${attendance}%</span> which is greater then 70%. So you are allowed for the exam.`)
// }else{
//     document.writeln(`Your attendance is <span class='red'>${attendance}%</span> which is lesser then 70%. So you are not allowed for the exam.`)
// }


// //2way
// let ar = 88
// document.writeln(`Your attendance is <span class='${ar>=70?'green':'red'}'>${ar}%</span> which is ${ar>=70?'greater':'less'} then 70%. So you are ${ar>=70?'':'not'} allowed for the exam.`)


// alert in js 
let age = parseInt(prompt("Enter The age Sir/Mam"))
if(age <= 0){
    alert("age can't be 0 and negatve")
}else{
    if(age>=18){
        document.writeln("You are Adult !")
    }else{
        document.writeln("You are minor !")
    }
}



