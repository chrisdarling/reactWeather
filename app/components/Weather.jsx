var React = require('react');
var WeatherForm = require('WeatherForm');
var WeatherMessage = require('WeatherMessage');
var openWeatherMap = require('openWeatherMap');

var Weather = React.createClass({
  getInitialState: function() {
    return {
      title: 'Get Weather',
      isLoading: false
    }
  },
  handleNewLocation: function(location) {
    var self = this;
    this.setState({
      isLoading: true
    });
    openWeatherMap.getTemp(location).then(function(temp) {
      self.setState({
        location: location,
        temp: temp,
        isLoading: false
      })
    }, function(errorMessage) {
      alert(errorMessage);
      self.setState({
        isLoading: false
      });
    });

  },
  render: function() {
    var {title, isLoading, temp, location} = this.state;
    function renderMessage () {
      if (isLoading) {
        return <h3>Fetching Weather</h3>
      } else if (temp && location) {
        return <WeatherMessage temp={temp} location={location}></WeatherMessage>;
      }
    }
    return (
      <div>
        <h3>{title}</h3>
        <WeatherForm onNewLocation={this.handleNewLocation}></WeatherForm>
        {renderMessage()}
      </div>
    );
  }
});





module.exports = Weather;
