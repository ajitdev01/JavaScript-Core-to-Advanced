function genCard() {
    // Show the loader
    const loader = document.getElementById('loader');
    loader.style.display = 'block';  // Show the loader

    // Hide the ID card until the generation process is done
    document.querySelector('.card-container').style.display = 'none';

    // Get the form values
    const name = document.getElementById('name').value;
    const regd = document.getElementById('regd').value;
    const course = document.getElementById('course').value;
    const purl = document.getElementById('purl').value;

    // Validate if any field is empty
    if (!name || !regd || !course || !purl) {
        alert("Please fill out all fields.");
        loader.style.display = 'none';  // Hide the loader in case of error
        return; // Stop if any field is missing
    }

    // After 3 seconds (simulate processing time), generate the ID card
    setTimeout(() => {
        // Update card elements
        document.getElementById('namev').innerHTML = name;
        document.getElementById('regdv').innerHTML = regd;
        document.getElementById('coursev').innerHTML = course;
        document.getElementById('photu').src = purl || "https://via.placeholder.com/150";  // Use a placeholder if photo URL is empty
        document.getElementById('qr').src = `https://quickchart.io/qr?text=${regd}&size=150`;

        // Hide the loader and show the ID card
        loader.style.display = 'none';  // Hide the loader
        document.querySelector('.card-container').style.display = 'block';  // Show the ID card

    }, 3000);  // Wait for 3 seconds (3000ms)
}
