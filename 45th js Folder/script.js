function genOtp(){
    let otp = ""
    for (let i = 1;i<=6;i++){
        let genDigit = Math.floor(Math.random(0,9)*10)
        otp += genDigit
    }
    document.getElementById("otp").innerText = otp
}


function copyOtp(){
    const otp= document.getElementById("otp").innerText
    navigator.clipboard.writeText(otp)
    .then(
         alert("Successfully Copied!")
    )
}

setInterval(() => {
    genOtp();
}, 5000);