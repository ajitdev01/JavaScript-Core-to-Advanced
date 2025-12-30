function generatePassword(len, ucase, lcase, nums, syms) {
    const uchars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
    const lchars = "abcdefghijklmnopqrstuvwxyz"
    const numbers = "0123456789"
    const symbols = "!@#$%^&*()/][{}"

    let generatePassword = ""
    let allowedChars = ""
    
    if(ucase){allowedChars+=uchars}
    if(lcase){allowedChars+=lchars}
    if(nums){allowedChars+=numbers}
    if(syms){allowedChars+=symbols}

    for(let i = 0;i<len;i++){
        let riqurePass = Math.floor(Math.random()*allowedChars.length)
        generatePassword += allowedChars[riqurePass]
    }
    document.getElementById("password").value = generatePassword
}

function lenControl(){
    let len = document.getElementById("len").value
    document.getElementById("lenshow").innerText = len
}

function showPassword(){
    const ucase = document.getElementById("ucase").checked
    const lcase = document.getElementById("lcase").checked
    const nums = document.getElementById("nums").checked
    const syms = document.getElementById("syms").checked
    const len = document.getElementById("len").value

    if(!ucase && !lcase && !nums &&!syms){
        alert("Please Select atleast One Constions");
    }else{
        generatePassword(len,ucase,lcase,nums,syms)
    }
}

function copyPass(){
    const copyText = document.getElementById("password")
    copyText.select();
    copyText.setSelectionRange(0,999);
    navigator.clipboard.writeText(copyText.value)
    alert("Password Copied !")
}