import { makeStyles } from '@material-ui/core/styles';

const dotStyle = makeStyles((theme) => ({
  content: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    paddingLeft: '1rem',
    width: '38rem',
    height: '15rem',
  },
  buttons: {
    display: 'flex',
    justifyContent: 'space-around',
    padding: '1rem 0rem 0rem 20rem',
  },
  dots: {
    backgroundColor: 'transparent',
    display: 'flex',
    justifyContent: 'center',
  },
  changing: {
    height: '5rem',
  },
}));

export default dotStyle;
