function check(){
    let num = document.getElementById("num").value

    if(num%2===0){
        result = "Even"
    }else if(num%2!==0){
        result = "Odd"
    }else{
        result = "Enter Vaild Input 😅"
    }

    document.getElementById('result').innerHTML = result
}