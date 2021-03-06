import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
  card_steper: {
    margin: '1rem 0rem 1rem 1rem',
    padding: '1rem 1rem',
    width: '40rem',
    height: '22rem',
    alignSelf: 'flex-end',
  },
  card_sign: {
    margin: '2rem 4rem 1rem 0rem',
    padding: '.2rem .2rem',
    width: '25rem',
    height: '32rem',
    alignSelf: 'flex-start',
    background: '#FFFFFF 0% 0% no-repeat padding-box',
    boxShadow: '0px 3px 9px #00000033',
    borderRadius: '5px',
  },
  card_profile: {
    margin: '2rem 4rem 1rem 0rem',
    padding: '.2rem .2rem',
    width: '35rem',
    minHeight: '35rem',
    background: '#FFFFFF 0% 0% no-repeat padding-box',
    boxShadow: '0px 3px 9px #00000033',
    borderRadius: '5px',
  },
  card__chart: {
    margin: '2rem 4rem 1rem 0rem',
    padding: '.2rem .2rem',
    width: '35rem',
    minHeight: '20rem',
    background: '#FFFFFF 0% 0% no-repeat padding-box',
    boxShadow: '0px 3px 9px #00000033',
    borderRadius: '5px',
    zIndex: 1,
  },
  card__statics: {
    margin: '2rem 4rem 1rem 0rem',
    padding: '.2rem .2rem',
    width: '15rem',
    minHeight: '20rem',
    background: '#FFFFFF 0% 0% no-repeat padding-box',
    boxShadow: '0px 3px 9px #00000033',
    borderRadius: '5px',
    zIndex: 1,
  },
});

export default useStyles;
