import React from 'react';
import Alert from '@material-ui/lab/Alert';
import { makeStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';
import Snackbar from '@material-ui/core/Snackbar';
import './style.css';

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    '& > * + *': {
      marginTop: theme.spacing(2),
    },
  },
}));

const Alerts = ({ Type, Msg }) => {
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
      <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
        <Alert onClose={handleClose} severity={Type}>
          {Msg}
        </Alert>
      </Snackbar>
    </div>
  );
};

Alerts.propTypes = {
  Type: PropTypes.string,
  Msg: PropTypes.string.isRequired,
};
Alerts.defaultProps = {
  Type: 'success',
};

export default Alerts;
