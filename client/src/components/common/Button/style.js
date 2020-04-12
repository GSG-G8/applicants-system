import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
  contained: {
    appearance: 'none',
    fontFamily: 'inherit',
    fontSize: '1rem',
    border: 0,
    borderRadius: '0.3rem',
    background: 'hsl(22, 85%, 53%)',
    color: 'white',
    padding: '0.5rem 2rem',
    minWidth: '8rem',
    cursor: 'pointer',
    '&:hover': {
      background: 'hsl(22, 85%, 45%)',
    },
    '&:active': {
      boxShadow: 'none',
      background: 'hsl(22, 85%, 40%)',
    },
    '&:focus': {
      outline: 'none',
    },
  },

  outlined: {
    appearance: 'none',
    fontFamily: 'inherit',
    fontSize: '1rem',
    border: '0.05rem solid  hsl(22, 85%, 53%)',
    borderRadius: '0.3rem',
    background: 'transparent',
    color: 'hsl(22, 85%, 53%)',
    padding: '0.5rem 2rem',
    minWidth: '8rem',
    cursor: 'pointer',
    '&:hover': {
      backgroundColor: 'transparent',
      fontWeight: '900',
    },
    '&:active': {
      boxShadow: 'none',
      background: 'hsl(22, 85%, 90%)',
    },
    '&:focus': {
      outline: 'none',
    },
  },
});
export default useStyles;
