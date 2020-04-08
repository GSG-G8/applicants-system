import React from 'react';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';

 function SimpleCard(props) {

  return (
    <Card >
      <CardContent>
     {props.content}
      </CardContent>
    </Card>
  );
}
export default SimpleCard;
