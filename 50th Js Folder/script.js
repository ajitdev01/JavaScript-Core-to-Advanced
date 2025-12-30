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

      // Create the map
      const map = L.map('map').setView([lat, lon], 13);

      // Add OpenStreetMap layer
      L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      }).addTo(map);

      // Add marker
      L.marker([lat, lon])
        .addTo(map)
        .bindPopup('📍 You are here!')
        .openPopup();
    }

    function error() {
      alert("Unable to retrieve your location 😞");
    }