import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    position: 'fixed',
  },
  toolbar: {
    justifyContent: 'space-between',
  },
  logo: {
    pointerEvents: 'none',
    width: '10rem',
  },
}));

export default useStyles;
