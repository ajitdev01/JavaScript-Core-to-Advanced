function genOtp(){
    let otp = ""
    for (let i = 1;i<=6;i++){
        let genDigit = Math.floor(Math.random(0,9)*10)
        otp += genDigit
    }
    document.getElementById("otp").innerText = otp
}
