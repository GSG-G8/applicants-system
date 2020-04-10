import React from 'react';
import PropTypes from 'prop-types';
import { ThemeProvider } from '@material-ui/core/styles';
import MuiTypography from '@material-ui/core/Typography';
import Theme from './style';

const Typography = ({ children, variant, color, align }) => (
  <ThemeProvider theme={Theme}>
    <MuiTypography align={align} variant={variant} color={color} gutterBottom>
      {children}
    </MuiTypography>
  </ThemeProvider>
);

Typography.defaultProps = {
  variant: 'body1',
  color: 'inherit',
  align: 'center',
};

Typography.propTypes = {
  align: PropTypes.string,
  children: PropTypes.string.isRequired,
  color: PropTypes.string,
  variant: PropTypes.string,
};

export default Typography;
