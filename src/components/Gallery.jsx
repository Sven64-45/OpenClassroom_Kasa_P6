import React from 'react';
import '../styles/components/Gallery.scss';
import { useState } from 'react';
import arrowprevious from '../assets/arrowprevious.png';
import arrownext from '../assets/arrownext.png';
import PropTypes from 'prop-types';

// Gallery component
function Gallery(props) {
  // Définition de l'état local de slideIndex à 0 en utilisant le hook useState
  const [slideIndex, setSlideIndex] = useState(0);

  // Déclaration d'une fonction qui sera utilisée pour passer à l'image précédente dans le composant Gallery
  const prevSlide = () => {
    setSlideIndex(slideIndex === 0 ? props.pictures.length - 1 : slideIndex - 1);
  };

  // Déclaration d'une fonction qui sera utilisée pour passer à l'image suivante dans le composant Gallery
  const nextSlide = () => {
    setSlideIndex(slideIndex === props.pictures.length - 1 ? 0 : slideIndex + 1);
  };

  return (
    <div className="slider">
      {/* Using the map method on the props.pictures array to iterate on each picture element */}
      {props.pictures &&
        props.pictures.length > 0 &&
        props.pictures.map((picture, index) => (
          <div key={index}>
            <img
              className={index === slideIndex ? `slider-item  slider-item-show` : `slider-item`}
              src={picture}
              alt={props.title}
              title={props.title}
            />
            {/* Check that props.pictures is well above 1 */}
            {props.pictures.length > 1 && (
              <div>
                <div className="arrow-position-to-switch">
                  <img
                    className="arrow-previous"
                    src={arrowprevious}
                    alt="previous visual"
                    onClick={prevSlide}
                  />
                  <div>
                    <p className="counter">
                      {slideIndex + 1} / {props.pictures.length}
                    </p>
                  </div>
                  <img
                    className="arrow-next"
                    src={arrownext}
                    alt="next visual"
                    onClick={nextSlide}
                  />
                </div>
              </div>
            )}
          </div>
        ))}
    </div>
  );
}

Gallery.propTypes = {
  pictures: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired
};

export default Gallery;
