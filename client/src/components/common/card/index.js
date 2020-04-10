import React from 'react';
import Card from '@material-ui/core/Card';
import useStyles from './style';

function SimpleCard({ classname, content }) {
  const classes = useStyles();
  return <Card className={classes[`${classname}`]}>{content}</Card>;
}

export default SimpleCard;
