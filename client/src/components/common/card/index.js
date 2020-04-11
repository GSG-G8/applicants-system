import React from 'react';
import Card from '@material-ui/core/Card';
import clsx from 'clsx';
import CardContent from '@material-ui/core/CardContent';
import PropTypes from 'prop-types';
import useStyles from './style';

const SimpleCard = ({ ClassName, content }) => {
  const classes = useStyles();
  return (
    <Card className={clsx(classes.card_steper, ClassName)}>
      <CardContent>{content}</CardContent>
    </Card>
  );
};

SimpleCard.propTypes = {
  ClassName: PropTypes.string,
  content: PropTypes.string,
};
SimpleCard.defaultProps = {
  ClassName: ' ',
  content: ' ',
};
export default SimpleCard;
