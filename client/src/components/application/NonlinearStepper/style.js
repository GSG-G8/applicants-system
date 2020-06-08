import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    '& .MuiFormHelperText-root': {
      marginBottom: '-20px',
    },
    '& .MuiFormControl-root': {
      width: '94%',
    },
  },

  validation: {
    textAlign: 'center',
    color: 'red',
    fontSize: '14px',
  },
  gender: {
    display: 'flex',
    justifyContent: 'flex-end',
    margin: theme.spacing(3),
  },
  nextButton: {
    marginLeft: theme.spacing(4),
  },
}));

const GeneralInfoStyles = makeStyles((theme) => ({
  button: {
    marginRight: theme.spacing(1),
  },
  gender: {
    display: 'flex',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  instructions: {
    marginTop: theme.spacing(1),
    marginBottom: theme.spacing(1),
  },
  textArea: {
    outlineColor: '#ed6d23',
    marginLeft: '1rem',
  },
}));

export { useStyles, GeneralInfoStyles };
