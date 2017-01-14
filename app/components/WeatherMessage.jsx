var React = require('react');

var WeatherMessage = ({temp, location}) => {
  return (
    <div>
      <h1>It is {temp} F in {location}</h1>
    </div>
  );
}

module.exports = WeatherMessage;
