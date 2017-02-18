var React = require('react');

// var WeatherMsg = (props) => {
//  var {temp,location} = props;
//  return (
//   <div>
//    <h2>It is {temp} in {location}.</h2>
//   </div>
//  );
// }

//we can destruct props as aparam to directly in values like here
var WeatherMsg = ({temp,location}) => {
 return (
  <div>
   <h2>It is {temp} in {location}.</h2>
  </div>
 );
}

module.exports = WeatherMsg;
