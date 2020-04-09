import React from 'react';
import Card from '@material-ui/core/Card';
import './index.css';

function SimpleCard(props) {
  return <Card className={props.classname}>{props.content}</Card>;
}
export default SimpleCard;
