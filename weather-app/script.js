async function getWeather() {
  const city = document.getElementById('city-input').value.trim();
  const resultDiv = document.getElementById('weather-result');
  if (!city) {
    resultDiv.textContent = 'Please enter a city name.';
    return;
  }
  resultDiv.textContent = 'Loading...';
  try {
    const geoResp = await fetch(`https://geocoding-api.open-meteo.com/v1/search?name=${encodeURIComponent(city)}&count=1`);
    const geoData = await geoResp.json();
    if (!geoData.results || geoData.results.length === 0) {
      resultDiv.textContent = 'City not found.';
      return;
    }
    const { latitude, longitude, name, country } = geoData.results[0];
    const weatherResp = await fetch(`https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&current_weather=true`);
    const weatherData = await weatherResp.json();
    const weather = weatherData.current_weather;
    resultDiv.innerHTML = `<h2>${name}, ${country}</h2><p>Temperature: ${weather.temperature} °C</p><p>Wind Speed: ${weather.windspeed} km/h</p>`;
  } catch (err) {
    console.error(err);
    resultDiv.textContent = 'Failed to fetch weather data.';
  }
}

document.getElementById('get-weather').addEventListener('click', getWeather);
