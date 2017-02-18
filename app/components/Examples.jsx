import React from 'react';
import {Card, CardActions, CardHeader, CardTitle, CardText} from 'material-ui/Card';
import Divider from 'material-ui/Divider';

var Examples = (props) => {
 return (
  <div>
   <Card >
     <CardTitle title="Example" style={{textAlign : "center"}}/>
     <Divider/>
     <CardActions>
      <p>Welcome to example page!</p>
     </CardActions>
   </Card>
  </div>
 );
}

module.exports = Examples;
