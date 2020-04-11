import { createMuiTheme } from '@material-ui/core/styles';

const Theme = createMuiTheme({
  palette: {
    primary: {
      main: 'rgb(237, 109, 35)',
    },
    secondary: {
      main: 'rgb(59,90,111)',
    },
  },
  typography: {
    h1: {
      fontFamily: 'Raleway',
      fontSize: 48,
      fontWeight: 'Bold',
    },
  },
});

export default Theme;
