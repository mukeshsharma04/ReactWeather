var React = require('react');

//Old Way we have only render function here we can make it stateless
// var About = React.createClass({
//  render : function() {
//   return (
//    <div>
//     <h2>About component</h2>
//    </div>
//   );
//  }
// });

//After React 0.14 we can make React Stateless Component if you have only render
// function in componnet then you can use stateless component.They don't maintain
//any state

var About = (props) => {
 return (
  <div>
   <h3>About</h3>
   <p>Welcome to About Page !</p>
  </div>
 );
}

module.exports = About;
