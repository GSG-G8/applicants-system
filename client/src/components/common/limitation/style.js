import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
  element: {
    margin: '1rem',
  },
  body: {
    height: '100%',
    width: '100%',
    position: 'fixed',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'white',
  },
});

export default useStyles;
