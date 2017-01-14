var React = require('react');

var About = (props) => {
  return (
    <div>
    <h1 className="text-centered">About</h1>
    <p>This is a weather application built on React. I have built this for The Complete
    React Web App Developer Course.
    </p>
    <p>
      Here are some of the tools I used:
    </p>
    <ul>
      <li><a href="https://facebook.github.io.react">React</a> - This was the Javascript Framework used.</li>
      <li><a href="http:openweathermap.org">Open Weather Map</a> - I used Open Weather Map Api for weather data.</li>
    </ul>
    </div>
  );
}
module.exports = About;
