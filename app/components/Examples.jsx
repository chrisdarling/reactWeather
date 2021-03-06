var React = require('react');
var {Link} = require('react-router');

var Examples = (props) => {
  return (
    <div>
      <h1 className="text-centered page-title">Examples</h1>
      <p>Here are a few examples of locations to try out!</p>
      <ol>
        <li>
          <Link to='/?location=Jacksonville'>Jacksonville, FL</Link>
        </li>
        <li>
          <Link to='/?location=Rio'>Rio, Brazil</Link>
        </li>
      </ol>
    </div>
  );
}

module.exports = Examples;
