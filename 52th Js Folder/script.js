//to get the current location
function getCurrentLocation() {
    navigator.geolocation.getCurrentPosition(success, error)
}
function success(cp) {
    const lat = cp.coords.latitude
    const lon = cp.coords.longitude

    // to view on map
    var map = L.map('map').setView([lat, lon], 13);

    L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '&copy; <a href="https://www.brainzima.com/copyright">Brainzima</a> contributors'
    }).addTo(map);

    L.marker([lat, lon]).addTo(map).bindPopup(`${lat}, ${lon}`).openPopup()


}
function error() {
    console.log("Getting Error!")
}
