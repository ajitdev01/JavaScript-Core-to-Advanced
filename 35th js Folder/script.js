function makeTable(){
    let number = document.getElementById("num").value
    // console.log(number)
    const result = document.getElementById("result") 

    for(let i = 1 ; i<=10;i++){
        result.append(`${i*number} `)
    }
}