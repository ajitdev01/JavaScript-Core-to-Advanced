// script.js
function getWeather() {
    const city = document.getElementById("city").value.trim();

    if (city) {
        weatherApi(city);
    } else {
        showAlert("Please enter a city name!", "warning");
    }
}

async function weatherApi(city) {
    const apiKey = 'b1b15e88fa797225412429c1c50c122a1'; // Note: Your API key seems to have an extra '1' at the end
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

    // Show loading spinner
    showLoading(true);
    hideWeatherInfo();

    try {
        const response = await fetch(url);

        if (!response.ok) {
            throw new Error('City not found');
        }

        const data = await response.json();
        displayWeather(data);

    } catch (error) {
        console.log(error);
        showAlert(`City "${city}" not found! Please try again.`, "danger");
    } finally {
        showLoading(false);
    }
}

function displayWeather(data) {
    // Display city name and date
    document.getElementById("cityName").innerText = `${data.name}, ${data.sys.country}`;
    document.getElementById("date").innerText = new Date().toLocaleDateString('en-US', {
        weekday: 'long',
        year: 'numeric',
        month: 'long',
        day: 'numeric'
    });

    // Display main temperature
    document.getElementById("temp").innerText = `${Math.round(data.main.temp)}°C`;

    // Display weather details
    document.getElementById("feels").innerText = `${Math.round(data.main.feels_like)}°C`;
    document.getElementById("humidity").innerText = `${data.main.humidity}%`;
    document.getElementById("wind").innerText = `${(data.wind.speed * 3.6).toFixed(1)} km/h`;
    document.getElementById("pressure").innerText = `${data.main.pressure} hPa`;
    document.getElementById("desc").innerText = data.weather[0].description;

    // Display weather icon
    document.getElementById("icon").src = `./Images/${data.weather[0].icon}.png`;

    // Show weather info with animation
    showWeatherInfo();
}

function showWeatherInfo() {
    document.getElementById("info").style.display = "block";
}

function hideWeatherInfo() {
    document.getElementById("info").style.display = "none";
}

function showLoading(show) {
    const loading = document.getElementById("loading");
    if (show) {
        loading.classList.remove("d-none");
    } else {
        loading.classList.add("d-none");
    }
}

function showAlert(message, type) {
    // Create Bootstrap alert
    const alertDiv = document.createElement('div');
    alertDiv.className = `alert alert-${type} alert-dismissible fade show`;
    alertDiv.role = 'alert';
    alertDiv.innerHTML = `
        ${message}
        <button type="button" class="btn-close" data-bs-dismiss="alert"></button>
    `;

    // Insert alert before weather info
    const cardBody = document.querySelector('.card-body');
    const searchBox = document.querySelector('.search-box');
    cardBody.insertBefore(alertDiv, searchBox.nextSibling);

    // Auto dismiss after 3 seconds
    setTimeout(() => {
        alertDiv.remove();
    }, 3000);
}