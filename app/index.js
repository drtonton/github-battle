var USER_DATA = {
  name: 'Tyler McGinnis',
  username: 'tylermcginnis',
  image: 'https://avatars0.githubusercontent.com/u/2933430?v=3$s=460'
}

var React = require('react');
var ReactDOM = require('react-dom');

var ProfilePic = React.createClass({
  render: function () {
    return <img src={this.props.imageUrl} style={{height: 100, width: 100}}></img>
  }
});

var ProfileLink = React.createClass({
  render: function () {
    return (
      <div>
        <a href={'https://www.github.com/' + this.props.username}>
        {this.props.username}
        </a>
      </div>
    );
  }
});

var ProfileName = React.createClass({
  render: function () {
    return <div>{this.props.name}</div>
  }
});

var Avatar = React.createClass({
  render: function () {
    return(
      <div>
        <ProfilePic imageUrl={this.props.user.image}/>
        <ProfileName name={this.props.user.name}/>
        <ProfileLink username={this.props.user.username}/>
      </div>
    );
  }
});

ReactDOM.render(<Avatar user={USER_DATA} />, document.getElementById('app'));


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
