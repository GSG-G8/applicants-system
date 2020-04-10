import { makeStyles } from '@material-ui/core/styles';

const dotStyle = makeStyles((theme) => ({
  steper: {
    maxWidth: '63rem',
    maxHeight: '46.9rem',
    padding: '5rem',
    flexGrow: 1,
  },
  content: {},
  buttonNext: {
    order: '3',
  },
  buttonBack: {
    order: '2',
  },

  dots: {
    backgroundColor: 'transparent',
    display: 'flex',
    flexWrap: 'wrap',
  },
}));

export default dotStyle;
