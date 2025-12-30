// Define the 10 colors you want to cycle through
const colors = [
    "red", "blue", "orange", "green", "yellow",
    "pink", "purple", "navy", "white", "lightblue"
];

// Get references to all 10 diya elements once
const diyas = [];
for (let i = 1; i <= 10; i++) {
    diyas.push(document.getElementById(`diya${i}`));
}

let colorStartIndex = 0; // Index in the 'colors' array to start from

function diyaJalao() {
    for (let i = 0; i < diyas.length; i++) {

        const colorIndex = (colorStartIndex + i) % colors.length;
        diyas[i].style.backgroundColor = colors[colorIndex];
    }

    // Increment the starting index for the next cycle
    // The modulo ensures it wraps back to 0 after reaching 9
    colorStartIndex = (colorStartIndex + 1) % colors.length;
}

setInterval(diyaJalao, 100);