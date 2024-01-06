import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import '../styles/components/card.scss';

function Card(props) {
  return (
    <div>
      <article className="cards-home-page">
        <Link to={`/logement/${props.id}`}>
          <div className="grid"></div>
          <img src={props.cover} alt={props.title} title={props.title} />
          <h3>{props.title}</h3>
        </Link>
      </article>
    </div>
  );
}

Card.propTypes = {
  id: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  cover: PropTypes.string.isRequired
};

export default Card;
