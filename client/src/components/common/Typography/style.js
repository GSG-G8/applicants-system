import { createMuiTheme, makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(() => ({
  hide: {
    display: 'none',
  },
}));
const Theme = createMuiTheme({
  palette: {
    primary: {
      main: 'rgb(237, 109, 35)',
    },
    secondary: {
      main: 'rgb(59,90,111)',
    },
    textPrimary: {
      main: 'rgb(33,36,41)',
    },
  },
  typography: {
    h1: {
      fontFamily: 'Raleway',
      fontSize: 48,
      fontWeight: 700,
      letterSpacing: 2,
    },
    h2: {
      fontFamily: 'Raleway',
      fontSize: 40,
      fontWeight: 700,
    },
    h3: {
      fontFamily: 'Raleway',
      fontSize: 25,
      fontWeight: 900,
    },
    h4: {
      fontFamily: 'Raleway',
      fontSize: 24,
      fontWeight: 700,
    },
    h5: {
      fontFamily: 'Raleway',
      fontSize: 22,
      fontWeight: 700,
    },
    h6: {
      fontFamily: 'Raleway',
      fontSize: 20,
      fontWeight: 700,
    },
    body1: {
      fontFamily: 'Raleway',
      fontSize: 20,
    },
    body2: {
      fontFamily: 'Raleway',
      fontSize: 15,
      fontWeight: 700,
    },
    subtitle1: {
      fontFamily: 'Raleway',
      fontSize: 18,
    },
  },
});

export { Theme, useStyles };
