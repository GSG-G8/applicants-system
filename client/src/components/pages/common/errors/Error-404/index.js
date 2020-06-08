import React from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import Typography from '@material-ui/core/Typography';
import PropTypes from 'prop-types';
import './index.css';

const Error404 = ({ auth }) => (
  <div className="notfound">
    <Helmet>
      <title>Page Not Found </title>
    </Helmet>
    <div className="notfound-404">
      <div className="h1">
        <Typography variant="h1">oops!</Typography>
      </div>
      <div className="h2">
        <Typography variant="h5">404 - The Page can't be found</Typography>
      </div>
    </div>
    {auth === 'admin' ? (
      <Link className="link" to="/dashboard">
        Back To Dashboard
      </Link>
    ) : auth === 'user' ? (
      <Link className="link" to="/steps">
        Back To your complete your application
      </Link>
    ) : (
      <Link className="link" to="/">
        Back To Home page
      </Link>
    )}
  </div>
);
Error404.propTypes = {
  auth: PropTypes.string,
};
Error404.defaultProps = {
  auth: '',
};

export default Error404;
