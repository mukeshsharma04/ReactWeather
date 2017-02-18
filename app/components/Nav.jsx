import React from 'react';
import {Link, IndexLink}  from 'react-router';
import Drawer from 'material-ui/Drawer';
import MenuItem from 'material-ui/MenuItem';
import {Toolbar, ToolbarGroup, ToolbarTitle} from 'material-ui/Toolbar';
import {List, ListItem} from 'material-ui/List';

var Nav = (props) => {
  return (
   <Drawer open={true}>
    <Toolbar style={{backgroundColor : '#00BCD4'}}>
     <ToolbarGroup firstChild={true} style={{padding : '8px'}}>
     <ToolbarTitle style={{color : '#ffffff'}}  text="React Weather" />
     </ToolbarGroup>
    </Toolbar>
    <List>
      <IndexLink to="/" activeClassName="active" activeStyle={{fontWeight : 'bold', textDecoration : 'none'}}>
       <ListItem primaryText="Get Weather" style={{fontWeight : 'bold', textDecoration : 'none'}}/>
      </IndexLink>
      <Link to="/about" activeClassName="active" style={{fontWeight : 'bold', textDecoration : 'none'}}>
       <ListItem primaryText="About" style={{fontWeight : 'bold', textDecoration : 'none'}}/>
      </Link>
      <Link to="/examples" activeClassName="active" activeStyle={{fontWeight : 'bold', textDecoration : 'none'}}>
       <ListItem primaryText="Get Examples" style={{fontWeight : 'bold', textDecoration : 'none'}}/>
      </Link>
     </List>
   </Drawer>

  );
}

module.exports = Nav;
