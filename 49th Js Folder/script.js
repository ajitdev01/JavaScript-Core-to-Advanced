function wish(){
    let names = ["Nilam","Sir","Mam","Rahul","Dig Nana"]
    let randonNumber = Math.floor(Math.random()*names.length)
    document.getElementById("name").innerText = names[randonNumber]
}

setInterval(()=>{
    wish()
},1000);