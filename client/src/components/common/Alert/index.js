import React from 'react';
import Alert from '@material-ui/lab/Alert';
import { makeStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';
import Snackbar from '@material-ui/core/Snackbar';

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    '& > * + *': {
      marginTop: theme.spacing(2),
    },
  },
  alert: {
    marginTop: '3rem',
  },
}));

const Alerts = ({ Type, Msg, vertical, horizontal }) => {
  const classes = useStyles();
  const [open, setOpen] = React.useState(true);

  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }
    setOpen(false);
  };
  return (
    <div className={classes.root}>
      <Snackbar
        open={open}
        autoHideDuration={6000}
        onClose={handleClose}
        anchorOrigin={{ vertical, horizontal }}
      >
        <Alert onClose={handleClose} severity={Type} className={classes.alert}>
          {Msg}
        </Alert>
      </Snackbar>
    </div>
  );
};

Alerts.propTypes = {
  Type: PropTypes.string,
  Msg: PropTypes.string.isRequired,
  vertical: PropTypes.string,
  horizontal: PropTypes.string,
};
Alerts.defaultProps = {
  Type: 'success',
  vertical: 'top',
  horizontal: 'center',
};

export default Alerts;
