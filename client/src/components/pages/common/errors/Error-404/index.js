import React from 'react';
import { Link } from 'react-router-dom';
import Typography from '@material-ui/core/Typography';
import './index.css';

const Error404 = () => (
  <div className="notfound">
    <div className="notfound-404">
      <div className="h1">
        <Typography variant="h1">oops!</Typography>
      </div>
      <div className="h2">
        <Typography variant="h5">404 - The Page can't be found</Typography>
      </div>
    </div>
    <Link className="link" to="/">
      Back TO Home page
    </Link>
  </div>
);

export default Error404;
