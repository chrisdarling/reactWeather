var React = require('react');
var WeatherForm = require('WeatherForm');
var WeatherMessage = require('WeatherMessage');
var openWeatherMap = require('openWeatherMap');
var ErrorModal = require('ErrorModal');

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
      isLoading: true,
      errorMessage: undefined,
      location: undefined,
      temp: undefined
    });
    openWeatherMap.getTemp(location).then(function(temp) {
      self.setState({
        location: location,
        temp: temp,
        isLoading: false
      })
    }, function(e) {
      self.setState({
        isLoading: false,
        errorMessage: e.message
      });
    });

  },
  componentWillReceiveProps: function(newProps) {
    var location = newProps.location.query.location;
    if (location && location.length > 0) {
      this.handleNewLocation(location);
      window.location.hash = '#/'
    }
  },
  componentDidMount: function() {
    var location = this.props.location.query.location;
    if (location && location.length > 0) {
      this.handleNewLocation(location);
      window.location.hash = '#/'
    }
  },
  render: function() {
    var {title, isLoading, temp, location, errorMessage} = this.state;
    function renderMessage () {
      if (isLoading) {
        return <h3>Fetching Weather</h3>
      } else if (temp && location) {
        return <WeatherMessage temp={temp} location={location}></WeatherMessage>;
      }
    }

    function renderError () {
      if (typeof errorMessage === 'string') {
        return (
          <ErrorModal message={errorMessage}></ErrorModal>
        );
      }
    }
    return (
      <div>
        <h1 className="text-centered page-title">{title}</h1>
        <WeatherForm onNewLocation={this.handleNewLocation}></WeatherForm>
        {renderMessage()}
        {renderError()}
      </div>
    );
  }
});





module.exports = Weather;
