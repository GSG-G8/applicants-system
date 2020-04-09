import React from 'react';
import PropTypes from 'prop-types';
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import MuiTypography from '@material-ui/core/Typography';

const theme = createMuiTheme({
  palette: {
    primary: {
      main: 'rgb(237, 109, 35)',
    },
    secondary: {
      main: 'rgb(59,90,111)',
    },
  },
});

const Typography = ({ children, variant, color, align }) => (
  <ThemeProvider theme={theme}>
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
