import React from 'react';
import Nav from './Nav';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import theme from './../material_ui_raw_theme_file.jsx';


var Main = (props) => {
 return (
   <MuiThemeProvider muiTheme={theme}>
    <div>
     <Nav/>
      <div style={{marginLeft : "25%", marginRight : "5%", marginTop : "5%"}}>{props.children}</div>
    </div>
   </MuiThemeProvider>
 );
}

module.exports = Main;
