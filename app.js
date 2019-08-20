const storage = new Storage();
const weatherLocation = storage.getLocationData();
const weather = new Weather(weatherLocation.city);
const ui = new UI();


document.addEventListener('DOMContentLoaded', getWeather);
// weather.changeLocation('Tashkent');
document.querySelector('#w-change-btn').addEventListener('click', () => {
  const city = document.querySelector('#city').value;
  weather.changeLocation(city);

  storage.setLocationData(city);
  getWeather();

  $('#locModal').modal('hide');
})

function getWeather() {
  weather.getWeather()
    .then(data => ui.paint(data))
    .catch(err => console.log(err))
}




