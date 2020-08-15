const axios = require('axios');

export const WeatherReq = (props: { cityName: string }) => {
  axios({
    method: 'GET',
    baseURL: `https://api.openweathermap.org/data/2.5/weather?q=${props.cityName},uk&appid=9593ad19b0bbb8dcd7e5ce910f6f6e18`,
    headers: {
      'Content-Type': 'application/json'
    }
  });
};
