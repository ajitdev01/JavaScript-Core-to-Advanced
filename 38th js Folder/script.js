function getColor(){
    const color = document.getElementById("hexColor").value 
    // console.log(color)
    document.getElementById("box").style.backgroundColor = color
    document.getElementById("hex").innerText = color
}