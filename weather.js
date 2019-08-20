class Weather {
  constructor(city){
    this.apiKey = '66cce2af0e476400f4cde68a662b28f4';
    this.city = city;
  }

  async getWeather() {
    const response = await fetch(`https://api.openweathermap.org/data/2.5/find?q=${this.city}&units=metric&appid=${this.apiKey}`);
    const responseData = await response.json();

    return responseData.list[0];
  }

  changeLocation(city) {
    this.city = city;
  }
}