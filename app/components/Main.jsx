var React = require('react');
var Nav = require('./Nav');

var Main = (props) => {
 return (
  <div style={{border : '1px solid red',padding : '5px'}}>
   <h2>Main component</h2>
   <Nav/>
   {props.children}
 </div>
 );
}

module.exports = Main;
