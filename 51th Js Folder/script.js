function getInfo() {
    navigator.geolocation.getCurrentPosition(success, error);
}

function success(currentPosition) {
    const lat = currentPosition.coords.latitude;
    const lon = currentPosition.coords.longitude;

    console.log("Latitude:", lat);
    console.log("Longitude:", lon);

    document.getElementById("gtInfo").href =
        `https://nominatim.openstreetmap.org/reverse?format=jsonv2&lat=${lat}&lon=${lon}`;

    getLocationInfo(lat, lon);
}

function error() {
    alert("Error: Unable to get your location 😞");
}

async function getLocationInfo(lat, lon) {
    const url = `https://nominatim.openstreetmap.org/reverse?lat=${lat}&lon=${lon}&format=json`;
    try {
        const response = await fetch(url);
        const data = await response.json();

        console.log(data);

        document.getElementById("display").textContent =
            `You are in ${data.address.city || data.address.town || data.address.village}, ${data.address.country}`;
    } catch (error) {
        console.error("Error fetching data:", error);
        alert("Failed to fetch location info 😢");
    }
}