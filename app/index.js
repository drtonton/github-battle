var React = require('react');
var ReactDOM = require('react-dom');
var routes = require('./config/routes');



ReactDOM.render(
  routes,
  document.getElementById('app')
);

/* ============ NOTEZ =============
every component gets a render method. render returns what the UI of the component
looks like. the html in that code is JSX.

ReactDOM tells the DOM where to render the component.
  2 args: element you want to render, and
          where to render to

Focused
Independent
Reusable
Small
Testable.   ALL React components should meet the FIRST criteria

*/
