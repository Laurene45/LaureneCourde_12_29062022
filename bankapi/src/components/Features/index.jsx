import React from 'react';
import PropTypes from 'prop-types';

const Feature = ({ img, alt, title, text }) => {
  return (
    <div className="feature-item">
      <img src={img} alt={alt} className="feature-icon" />
      <h3 className="feature-item-title">{title}</h3>
      <p>{text}</p>
    </div>
  );
};

Feature.propTypes = {
  img: PropTypes.string,
  alt: PropTypes.string,
  title: PropTypes.string,
  text: PropTypes.string,
};

export default Feature;
