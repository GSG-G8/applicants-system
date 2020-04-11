import React from 'react';
import PropTypes from 'prop-types';
import { ThemeProvider } from '@material-ui/core/styles';
import MuiTypography from '@material-ui/core/Typography';
import { Theme, useStyles } from './style';

const Typography = ({ children, className, ...props }) => {
  const classes = useStyles();

  return (
    <ThemeProvider theme={Theme}>
      <MuiTypography
        className={classes[`${className}`]}
        // eslint-disable-next-line react/jsx-props-no-spreading
        {...props}
        gutterBottom
      >
        {children}
      </MuiTypography>
    </ThemeProvider>
  );
};

Typography.defaultProps = {
  variant: 'body1',
  align: 'center',
  color: 'textPrimary',
};

Typography.propTypes = {
  variant: PropTypes.string,
  align: PropTypes.string,
  className: PropTypes.string,
  children: PropTypes.string.isRequired,
};

export default Typography;
