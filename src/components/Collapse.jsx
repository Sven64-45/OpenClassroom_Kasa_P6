import React, { useState } from 'react';
import PropTypes from 'prop-types';
import '../styles/components/Collapse.scss';
import arrowopen from '../assets/arrowopen.png';

function Collapse(props) {
  // définition local state isOpen
  const [isOpen, setIsOpen] = useState(props.open !== undefined ? props.open : false);
  // création d'un évenement au click
  const handleClick = () => {
    setIsOpen(!isOpen);
  };

  // affichage du composant
  return (
    <div className="collapse-drop">
      <h3 onClick={handleClick}>
        {props.title}
        <img
          className={isOpen ? 'arrow arrow-close' : 'arrow arrow-open'}
          src={arrowopen}
          alt="show content"
        />
      </h3>
      {/* {isOpen && (
        <div ref={myRef} className="content">
          {props.content}
        </div>
      )} */}
      <div className={isOpen ? 'content show' : 'content'}>{props.content}</div>
    </div>
  );
}

Collapse.propTypes = {
  title: PropTypes.string.isRequired,
  // content: PropTypes.string.isRequired,
  content: PropTypes.oneOfType([PropTypes.string, PropTypes.array]).isRequired,
  open: PropTypes.bool
};

export default Collapse;
