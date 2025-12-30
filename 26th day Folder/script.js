input = parseInt(prompt("Enter the how many Times run You"))


datas = [];
for(let i =1;i<=input;i++){
    user = parseInt(prompt(`Enter The number ${i}`))
    datas.push(user)
}

//to display the data using forEach loop
datas.forEach(function(data){
    document.writeln(data + "<br>")
})