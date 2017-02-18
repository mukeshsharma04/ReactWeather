var React = require('react');
var WeatherForm = require('./WeatherForm');
var WeatherMsg = require('./WeatherMsg');
var OpenWeatherMap = require('./../api/OpenWeatherMap')
var Weather = React.createClass({
 getInitialState : function() {
  return {
   isLoading : false
  }
 },

 handleSearch : function(location) {
  var that = this;

   this.setState({isLoading :true});
   OpenWeatherMap.getTemp(location).then(function(temp){
    that.setState({
     location : location,
     temp : temp,
     isLoading : false
    });
   },function(errorMessage){
    that.setState({isLoading :false});
    alert(errorMessage);
   });
  },

 render : function() {
  var {isLoading, temp, location} = this.state;

  function renderMessage () {
    if(isLoading) {
     return <h3>Fetching Weather.....</h3>;
    }else if(temp && location) {
     return <WeatherMsg location={location} temp={temp}/>;
    }
  }

  return (
   <div style={{border : '1px solid blue',padding : '5px'}}>
    <h2>Get Wheather</h2>
    <WeatherForm onSearch={this.handleSearch}/>
    {renderMessage()}
   </div>
  );
 }
});

module.exports = Weather;
