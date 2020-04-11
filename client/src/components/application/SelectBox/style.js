import { makeStyles } from '@material-ui/core/styles';

const selectStyle = makeStyles((theme) => ({
  formControl: {
    margin: theme.spacing(1),
    minWidth: '7.5rem',
    width: '3.7rem',
    height: '3.75',
    background: '#FFFFFF 0% 0% no-repeat padding-box',
    borderRadius: '5px',
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
}));

export default selectStyle;
