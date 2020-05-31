import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  gender: {
    display: 'flex',
    justifyContent: 'flex-end',
    margin: theme.spacing(3),
  },
  nextButton: {
    marginLeft: theme.spacing(4),
  },
}));

export default useStyles;
