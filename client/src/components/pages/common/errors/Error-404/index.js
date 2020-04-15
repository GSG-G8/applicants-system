import React from 'react';
import Image from '../../../../common/Image/index';
import ErrorImage from '../../../../../assets/images/error404.jpg';

const Error404 = () => (
  <div>
    <Image alt="Error 404" src={ErrorImage} style={{ marginTop: '3rem' }} />
  </div>
);

export default Error404;
