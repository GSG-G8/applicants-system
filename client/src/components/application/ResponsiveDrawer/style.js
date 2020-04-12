import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(() => ({
  list: {
    margin: '1rem 0',
    padding: '0.5rem 2rem',
    '&:focus': {
      boxShadow: 'none',
      background: 'hsl(22, 85%, 50%)',
      color: 'white',
      fontWeight: 'bold',
    },
  },
  listText: {
    fontSize: '1.5rem',
    fontWeight: '500',
    margin: '0 1rem',
  },
  drawerPaper: {
    alignSelf: 'flex-end',
    padding: '4rem 0.2rem 0 0',
  },
}));

export default useStyles;
