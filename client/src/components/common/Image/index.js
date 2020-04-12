import Image from 'material-ui-image';
import PropTypes from 'prop-types';
import React from 'react';

const CommonImage = ({ src, width, height, onClick, alt, style }) => (
  <Image
    src={src}
    imageStyle={{ width, height }}
    onClick={onClick}
    alt={alt}
    style={style}
    animationDuration="0"
  />
);

CommonImage.propTypes = {
  src: PropTypes.string.isRequired,
  width: PropTypes.string,
  height: PropTypes.string,
  onClick: PropTypes.func,
  alt: PropTypes.string,
  style: PropTypes.string,
};
CommonImage.defaultProps = {
  width: '100%',
  height: 'auto',
  onClick: () => {},
  alt: 'application custom image',
  style: null,
};
export default CommonImage;
