import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
  profile: {
    marginRight: '10px',
  },
  logout: {
    marginRight: '10px',
  },
  bar: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
  },
  UserName: {
    color: 'rgba(0, 0, 0, 0.850)',
    fontWeight: 'bolder',
  },
  userImage: {
    width: '2rem',
    height: '2rem',
  },
});

export default useStyles;
