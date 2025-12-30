function genPassword(){
    const randomChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789abcdefghijklmnopqrstuvwxyz!@#$%^&()";
   
    console.log(randomChars)
    let len = randomChars.length
    console.log(len)

    // one times 
    const one_item = randomChars[0]
    console.log(one_item)

    let generatedPass = ''
    for(let i = 0;i<8;i++){
        let requrepass = Math.floor(Math.random()*len)
        generatedPass += randomChars[requrepass]
    }
    console.log(generatedPass)
    document.getElementById("display").innerText = generatedPass
}