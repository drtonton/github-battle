var React = require('react');
var ReactDOM = require('react-dom');

var HelloWorld = React.createClass({
  render: function () {
    return (
      <div> Hello World </div>
    )
  }
});

ReactDOM.render(
  <HelloWorld />,
  document.getElementById('app')
);


/*
every component gets a render method. render returns what the UI of the component
looks like. the html in that code is JSX.

ReactDOM tells the DOM where to render the component.
  2 args: element you want to render, and
          where to render to

*/
