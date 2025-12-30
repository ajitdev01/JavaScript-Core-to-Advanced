
function area(){
    w = parseFloat(prompt("Enter the Width of Rectangle"))
    h = parseFloat(prompt("Enter the Height of Rectangle"))
    document.writeln(`
        Width of Rectangle : ${w} <br>
        Height of Rectangle : ${h} <br>
        Area of Rectangle : ${w*h} <br>`)
}

function areac(){
    r = parseFloat(prompt("Enter The radius of Circle"))
    document.writeln(`
        radius of Circle :${r} <br>
        value of Pie : 3.14 <br>
        Area of Circle : ${3.14*r*r}`)
}

let user = prompt("What you need Rectangle Or Circle  :- ")
if(user == "Rectangle"){
    area()
}else if(user == "Circle"){
    areac()
}else{
    alert("Enter not vaild input ")
}
