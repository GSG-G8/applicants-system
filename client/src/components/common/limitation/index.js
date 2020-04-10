import React from 'react';
import CircularProgress from '@material-ui/core/CircularProgress';
import useStyles from './style';

export default function CircularIndeterminate({
  bodyClass,
  circulClass,
  circulSize,
}) {
  const classes = useStyles();

  return (
    <div className={classes[`${bodyClass}`]}>
      <CircularProgress
        color="secondary"
        disableShrink
        className={classes[`${circulClass}`]}
        size={circulSize}
      />
    </div>
  );
}
