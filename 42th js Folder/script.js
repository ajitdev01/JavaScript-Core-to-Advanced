// 1 way 
// function bulbOn(){
//     document.getElementById("image").src="bulb-on.png"
// }
// function bulbOff(){
//     document.getElementById("image").src="bulb-off.png"
// }
// function bulbDim(){
//     document.getElementById("image").src="bulb-night.png"
// }


// // way 2 
// function bulb(mode) {
//     switch (mode) {
//         case "on":
//             sorc = "bulb-on.png"
//             break;
//         case "off":
//             sorc = "bulb-off.png"
//             break;
//         case "night":
//             sorc = "bulb-night.png"
//             break;
//         default:
//             break;


//     }
//     document.getElementById("image").src = sorc
// }



// way 3
function bulb(mode) {
    switch (mode) {
        case "on":
            sorc = "bulb-on.png"
            bgc = "#fcf6b1"
            break;
        case "off":
            sorc = "bulb-off.png"
            bgc ="#363534"
            break;
        case "night":
            sorc = "bulb-night.png"
            bgc= "#b7c6eb"
            break;
        default:
            break;


    }
    document.getElementById("image").src = sorc
    document.getElementById("body").style.backgroundColor = bgc
}








// profenal way 
function bulb(srce) {
    document.getElementById("image").src = `bulb-${srce}.png`
}
