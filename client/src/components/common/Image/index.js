import Image from 'material-ui-image';
import React from 'react';
import PropTypes from 'prop-types';

export default function CommonImage({
  src,
  width,
  height,
  animationDuration,
  onClick,
  alt,
  style,
}) {
  return (
    <Image
      imageStyle={{ width, height }}
      animationDuration={animationDuration}
      onClick={onClick}
      alt={alt}
      style={style}
      src={src}
    />
  );
}

CommonImage.propTypes = {
  src: PropTypes.string.isRequired,
  width: PropTypes.string,
  height: PropTypes.string,
  animationDuration: PropTypes.number,
  onClick: PropTypes.func,
  alt: PropTypes.string,
  style: PropTypes.string,
};
CommonImage.defaultProps = {
  animationDuration: 0,
  width: '100%',
  height: 'auto',
  onClick: null,
  alt: 'application custom image',
  style: null,
};
