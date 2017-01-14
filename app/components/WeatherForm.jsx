var React = require('react');

var WeatherForm = React.createClass({
  onFormSubmit: function(e) {
    e.preventDefault();
    var location = this.refs.location.value;
    if (location.length > 0) {
      this.props.onNewLocation(location);
      this.refs.location.value = '';
    }
  },
  render: function() {
    return (
      <form onSubmit={this.onFormSubmit}>
        <input type='text' placeholder="Enter City" ref='location'/>
        <button className="button expanded">Get Weather</button>
    </form>
    );
  }
})

module.exports = WeatherForm;
