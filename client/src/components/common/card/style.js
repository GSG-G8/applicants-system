import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
  card_steper: {
    margin: '2rem 0rem 1rem 2rem',
    padding: '2rem 1rem',
    width: '40rem',
    height: '25rem',
    alignSelf: 'flex-end',
  },
  card_sign: {
    position: 'absolute',
    margin: '2rem 4rem 1rem 0rem',
    padding: '2rem 1rem',
    right: '4rem',
    width: '20rem',
    height: '25rem',
    alignSelf: 'flex-start',
  },
});

export default useStyles;
