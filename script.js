function getWeather() {
  const city = document.getElementById('cityInput').value;
  const apiKey = '1f746599fc610d5c66f17514835711e9';
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}`;

  fetch(url)
    .then(response => {
      if (!response.ok) {
        throw new Error('City not found');
      }
      return response.json();
    })
    .then(data => {
      const weatherData = `
        <h2>${data.name}, ${data.sys.country}</h2>
        <p>🌡️ Temperature: ${data.main.temp}°C</p>
        <p>🌥️ Weather: ${data.weather[0].description}</p>
        <p>💧 Humidity: ${data.main.humidity}%</p>
        <p>💨 Wind Speed: ${data.wind.speed} m/s</p>
      `;
      document.getElementById('weatherResult').innerHTML = weatherData;
    })
    .catch(error => {
      document.getElementById('weatherResult').innerHTML = `<p style="color:red;">${error.message}</p>`;
    });
}