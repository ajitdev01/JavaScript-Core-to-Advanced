let imageNumber = 0
setInterval(() => {
    imageNumber++
    if(imageNumber>5){
        imageNumber = 1
    }
    document.getElementById("img").src = "images/"+imageNumber+".png"
}, 2000);