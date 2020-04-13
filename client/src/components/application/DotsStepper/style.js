import { makeStyles } from '@material-ui/core/styles';

const dotStyle = makeStyles((theme) => ({
  content: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    textAlignLast: 'left',
    padding: '5rem 2.6rem 4rem 2rem',
    width: '57.8rem',
    height: '22rem',
  },
  buttons: {
    display: 'flex',
    padding: '2rem',
    justifyContent: 'flex-end',
  },
  dots: {
    backgroundColor: 'transparent',
    display: 'flex',
    justifyContent: 'center',
  },
  changing: {
    height: '2rem',
  },
}));

export default dotStyle;
