
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

    L.marker([lat, lon]).addTo(map).bindPopup(`${lat}, ${lon}`)


}
function error() {
    console.log("Getting Error!")
    document.getElementById("map").innerHTML=`<h2>You Didn't Allowed the location. Please allow to show the location.</h2>`
}

//call the function first...
getCurrentLocation()
