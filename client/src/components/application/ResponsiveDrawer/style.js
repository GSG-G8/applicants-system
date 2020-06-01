import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(() => ({
  list: {
    margin: '1rem 0',
    padding: '0.5rem 2rem',
  },
  buttonEffect: {
    boxShadow: 'none',
    background: 'hsl(22, 85%, 50%)',
    color: 'white',
    fontWeight: 'bold',
    '&:hover': {
      boxShadow: 'none',
      background: 'hsl(22, 85%, 50%)',
      color: 'white',
      fontWeight: 'bold',
    },
  },
  listText: {
    fontSize: '1rem',
    fontWeight: '500',
    margin: '0 1rem',
  },
  drawerPaper: {
    alignSelf: 'flex-end',
    padding: '4rem 0.2rem 0 0',
    zIndex: '0',
  },
}));

export default useStyles;
