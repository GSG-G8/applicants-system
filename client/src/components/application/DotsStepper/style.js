import { makeStyles } from '@material-ui/core/styles';

const dotStyle = makeStyles((theme) => ({
  content: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    paddingLeft: '1rem',
    width: '41rem',
    height: '16rem',
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
    height: '6rem',
  },
}));

export default dotStyle;
