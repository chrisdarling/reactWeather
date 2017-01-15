var React = require('react');

var ErrorModal = React.createClass({
  getDefaultProps: function() {
    return {
      title: 'Error'
    };
  },
  propTypes: {
    titles: React.PropTypes.string,
    message: React.PropTypes.string.isRequired
  },
  componentDidMount: function() {
    var modal = new Foundation.Reveal($('#error-modal'));
    modal.open();
  },
  render: function() {
    var {title, message} = this.props;
    return (
      <div>
        <div id="error-modal" ref="error-modal" className="reveal tiny text-centered" data-reveal="">
          <h4>{title}</h4>
          <p>{message}</p>
          <p>
            <button type="button" className="button" data-close="">Okay</button>
          </p>
        </div>
      </div>
    );
  }
})

module.exports = ErrorModal;
