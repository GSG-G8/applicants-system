import { makeStyles } from '@material-ui/core/styles';

const dotStyle = makeStyles((theme) => ({
  content: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    textAlignLast: 'left',
    paddingLeft: '15px',
    width: '40rem',
    height: '20rem',
  },
  buttons: {
    display: 'flex',
    justifyContent: 'space-around',
    padding: '1rem 1rem 5rem 22rem',
  },
  dots: {
    backgroundColor: 'transparent',
    display: 'flex',
    justifyContent: 'center',
  },
  changing: {
    height: '7rem',
  },
}));

export default dotStyle;
