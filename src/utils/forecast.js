const request = require('request');

const forecast = (latitude, longitude, callback) => {
  const coords = `${latitude},${longitude}`;
  const url = `http://api.weatherstack.com/current?access_key=3a63b99a51059fc40626299989ccd0da&query=${coords}`;

  request({ url, json: true }, (error, { body }) => {
    if (error) {
      callback('Unable to connect to weather service!', undefined);
    } else if (body.error) {
      callback('Unable to find location', undefined);
    } else {
      const { current } = body;
      callback(
        undefined,
        `${current.weather_descriptions[0]} It is currently ${current.temperature} degrees out. It feels like ${current.feelslike} degrees out.🌤️`
      );
    }
  });
};

module.exports = forecast;
