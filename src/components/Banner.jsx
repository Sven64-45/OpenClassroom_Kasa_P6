import React from 'react';
import PropTypes from 'prop-types';
import '../styles/components/Banner.scss';

function Banner(props) {
  return (
    <div className="banner">
      {props.title && <h2 className="title-banner">{props.title}</h2>}
      <img src={props.image} alt={props.title} title={props.title} />
    </div>
  );
}
Banner.propTypes = {
  title: PropTypes.string,
  image: PropTypes.string
};

export default Banner;
