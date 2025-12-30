function calculate(){
    let num1 = parseFloat(document.getElementById("num1").value)
    let num2 = parseFloat(document.getElementById("num2").value)
    let operations = document.getElementById("op").value

    // console.log(operations)
    if(operations === "+"){
        result = num1 +num2
    }else if(operations === "-"){
        result = num1-num2
    }else if(operations === "/"){
        result = num1/num2
    }else if(operations === "*"){
        result = num1*num2
    }else{
        result = "Invaild Plese Enter Agein"
    }
    document.getElementById("result").innerText= result


}