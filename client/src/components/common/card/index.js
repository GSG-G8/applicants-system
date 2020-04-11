import React from 'react';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import PropTypes from 'prop-types';
import useStyles from './style';

const SimpleCard = ({ ClassName, content }) => {
  const classes = useStyles();
  return (
    <Card className={classes[`${ClassName}`]}>
      <CardContent>{content}</CardContent>
    </Card>
  );
};

SimpleCard.propTypes = {
  ClassName: PropTypes.string,
  content: PropTypes.string,
};
SimpleCard.defaultProps = {
  ClassName: 'card_steper',
  content: ' ',
};
export default SimpleCard;
