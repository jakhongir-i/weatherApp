class UI {
  constructor() {
    this.location = document.querySelector('#w-location');
    this.desc = document.querySelector('#w-desc');
    this.temperature = document.querySelector('#w-string');
    this.icon = document.querySelector('#w-icon');
    this.details = document.querySelector('#w-details');
    this.humidity = document.querySelector('#w-humidity');
    this.pressure = document.querySelector('#w-pressure');
    this.clouds = document.querySelector('#w-clouds');
    this.wind = document.querySelector('#w-wind');
  }

  paint(weather) {
    this.location.textContent = `${weather.name}, ${weather.sys.country}`;
    this.desc.textContent = weather.weather[0].main;
    this.temperature.textContent = `${weather.main.temp}℃`;
    this.icon.setAttribute('src', `http://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`);
    this.humidity.textContent = `Humidity: ${weather.main.humidity}%`;
    this.pressure.textContent = `Pressure: ${weather.main.pressure}hPa`;
    this.clouds.textContent = `Cloudly: ${weather.clouds.all}%`;
    this.wind.textContent = `Wind: ${weather.wind.speed} km/h`
  }
}