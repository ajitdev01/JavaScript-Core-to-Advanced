let currenctDate = new Date()
console.log(currenctDate)
document.writeln(`${currenctDate} <br>`)



document.writeln(currenctDate.getFullYear() + "<br>") // get Full yeay like 
document.writeln(currenctDate.getDate()+ "<br>") // get Full yeay like 



document.writeln(currenctDate.getDay()+ "<br>")// week number
let days = ["Sunday","Monday","Tuesday","Wedenesday","Thursday","Friday","Saturday"]
document.writeln(days[currenctDate.getDay()] +"<br>") // dayname 


document.writeln(currenctDate.getHours() + "<br>")// Hours 
document.writeln(currenctDate.getMinutes()  + "<br>")// Minues 
document.writeln(currenctDate.getSeconds()  + "<br>")// Secondes 
document.writeln(currenctDate.getMilliseconds()  + "<br>")// Miliseconds 




document.writeln(currenctDate.getMonth() +"<br>") // for months
let months = ["January","February","March","April","May","June","July","August","September","October","November","December"]
document.writeln(months[currenctDate.getMonth()] + "<br>")



document.writeln(currenctDate.toDateString() + "<br>")
document.writeln(currenctDate.toLocaleDateString() + "<br>")
document.writeln(currenctDate.toISOString() + "<br>")
document.writeln(currenctDate.toLocaleString() + "<br>")
document.writeln(currenctDate.toDateString() + "<br>")
document.writeln(currenctDate.toLocaleTimeString() + "<br>")



