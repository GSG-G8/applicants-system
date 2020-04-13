import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
  card_steper: {
    margin: '2rem 0rem 1rem 2rem',
    padding: '2rem 1rem',
    width: '40rem',
    height: '25rem',
    alignSelf: 'flex-end',
    background: '#FFFFFF 0% 0% no-repeat padding-box',
    boxShadow: '0px 3px 9px #00000033',
    borderRadius: '5px',
  },
  card_sign: {
    margin: '2rem 4rem 1rem 0rem',
    padding: '2rem 1rem',
    width: '26rem',
    height: '30rem',
    alignSelf: 'flex-start',
    background: '#FFFFFF 0% 0% no-repeat padding-box',
    boxShadow: '0px 3px 9px #00000033',
    borderRadius: '5px',
  },
});

export default useStyles;
