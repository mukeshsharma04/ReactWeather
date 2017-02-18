var React = require('react');
var {Link, IndexLink}  = require('react-router');

var Nav = (props) => {
  return (
   <div style={{border : '1px solid black'}}>
    <h2>Nav component</h2>
    <IndexLink to="/" activeClassName="active" activeStyle={{fontWeight : 'bold'}}>Get Weather</IndexLink>&nbsp;&nbsp;
    <Link to="/about" activeClassName="active" activeStyle={{fontWeight : 'bold'}}>About</Link>&nbsp;&nbsp;
    <Link to="/examples" activeClassName="active" activeStyle={{fontWeight : 'bold'}}>Get Examples</Link>

   </div>
  );
}

module.exports = Nav;
