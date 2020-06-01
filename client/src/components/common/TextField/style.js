import { makeStyles } from '@material-ui/core/styles';

const style = makeStyles((theme) => ({
  root: {
    '& .MuiTextField-root': {
      margin: theme.spacing(2),
    },
    '& .MuiFormHelperText-root': {
      marginBottom: '-28px',
    },
  },
  container: {
    padding: '1rem',
  },
}));
export default style;
