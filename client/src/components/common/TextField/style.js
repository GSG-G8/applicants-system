import { makeStyles } from '@material-ui/core/styles';

const style = makeStyles((theme) => ({
  root: {
    '& .MuiTextField-root': {
      margin: theme.spacing(1),
      width: '40.7rem',
    },
  },
  container: {
    margin: theme.spacing(1),
    width: '40.7rem',
  },
  signForm: {
    background: '#F1F1F1 0% 0% no-repeat padding-box',
    margin: theme.spacing(0),
    width: '24rem',
    height: '2.5rem',
    fontSize: '1rem',
    marginBottom: '1rem',
  },
  label: {
    fontSize: '1.3rem',
    lineHeight: '.2rem',
  },
}));
export default style;
