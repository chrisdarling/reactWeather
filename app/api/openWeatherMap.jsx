var axios = require('axios');
const API_KEY = '4d223f6186e1b57f8422df3b9397a9f6';
const OPEN_WEATHER_MAP_URL = `http://api.openweathermap.org/data/2.5/weather?appid=${API_KEY}&units=imperial`;


module.exports = {
  getTemp: function(location) {
    var encodedLocation = encodeURIComponent(location);
    var requestUrl = `${OPEN_WEATHER_MAP_URL}&q=${encodedLocation}`;
    return axios.get(requestUrl).then(function(res) {
      if (res.data.cod && res.data.message) {
        throw new Error(res.data.message);
      } else {
        return res.data.main.temp;
      }
    }, function(res) {
          throw new Error(res.data.message);
    });
  }
}
