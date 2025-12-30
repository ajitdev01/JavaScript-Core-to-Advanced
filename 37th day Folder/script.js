function changeBg(color){
    document.getElementById("box").style.backgroundColor = color
}

function doMagic(){
    document.getElementById("title").classList.add("title")
}

function undoMagic(){
    document.getElementById("title").classList.remove("title")
}