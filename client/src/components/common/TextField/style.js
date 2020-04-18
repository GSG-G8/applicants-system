import { makeStyles } from '@material-ui/core/styles';

const style = makeStyles((theme) => ({
  root: {
    '& .MuiTextField-root': {
      marginTop: theme.spacing(1),
      // width: '40.7rem',
    },
  },
  container: {
    padding: '1rem',
  },
}));
export default style;
