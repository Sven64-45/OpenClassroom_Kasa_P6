import React from 'react';
import '../styles/components/Content.scss';
import PropTypes from 'prop-types';

// Features component declaration with a function
function Features(props) {
  return (
    <div className="informations-of-lodging">
      <div>
        <h2 className="lodging-title-in-lodging-page">{props.title}</h2>
        <p className="location-of-lodging">{props.location}</p>
        <div className="button-tag-style">
          {/* Using the map method on the props.tag array to iterate on each tag element and create buttons corresponding */}
          {props.tag &&
            props.tag.length > 0 &&
            props.tag.map((tag, index) => <button key={index}>{tag}</button>)}
        </div>
      </div>
      <div>
        <div className="host-informations">
          <p>{props.host}</p>
          <img src={props.picture} alt="Accommodation host" title="Picture of host" />
        </div>
        <div className="stars-of-lodging">{props.rating}</div>
      </div>
    </div>
  );
}

// PropTypes verification for the Features component
Features.propTypes = {
  title: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  host: PropTypes.string.isRequired,
  picture: PropTypes.array.isRequired,
  rating: PropTypes.number.isRequired
};

export default Features;
