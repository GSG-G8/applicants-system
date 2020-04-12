import React from 'react';
import './index.css';
import ErrorImage from '../../../../assets/images/error404.jpg';

const Error404 = () => (
  <div>
    <img alt="Error 404" src={ErrorImage} className="error_404" />
  </div>
);

export default Error404;
