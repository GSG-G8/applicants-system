import { makeStyles } from '@material-ui/core/styles';

const style = makeStyles((theme) => ({
  root: {
    '& .MuiTextField-root': {
      margin: theme.spacing(2),
      width: '40.7rem',
    },
  },
  container: {
    padding: '1rem',
  },
}));
export default style;
