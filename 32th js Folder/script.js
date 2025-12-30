function sayHi(){
    document.getElementById("hi").innerHTML = "Hello Nilam I ❤️ U"
}

function sayBye(){
    document.getElementById("hi").innerHTML = "😭"
}

function sum(){
    let num1 = document.getElementById("num1").value
    let num2 = document.getElementById("num2").value
  let result =  ((parseInt(num1))+(parseInt(num2)))
  document.getElementById("result").innerText = result
}