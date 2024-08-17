import PropTypes from "prop-types";
import { useState } from "react";
import { useParams } from "react-router-dom";
import "./carousel.scss";

const Carousel = ({ ...props }) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const { logementsId } = useParams();

  function nextSlide() {
    setCurrentSlide(currentSlide === props.pictures.length - 1 ? 0 : currentSlide + 1);
  }

  function prevSlide() {
    setCurrentSlide(currentSlide === 0 ? props.pictures.length - 1 : currentSlide - 1);
  }

  return (
    <>
      <div className="slider">
        {props.pictures.length > 1 && (
          <>
            <div className="slider__nav">
              <button
                onClick={prevSlide}
                className="slider__nav__prev slider__nav__btn"
                aria-label="previous slide"
                value="previouslide"
              >
                <span className="fa-solid fa-chevron-left"></span>
              </button>
              <button
                onClick={nextSlide}
                className="slider__nav__next slider__nav__btn"
                aria-label="next slide"
                value="nextSlide"
              >
                <span className="fa-solid fa-chevron-right"></span>
              </button>
            </div>
            <div className="number_item">
              <span>
                {currentSlide + 1} / {props.pictures.length}
              </span>
            </div>
          </>
        )}
        <div className="wrapper">
          <div className="wrapper__item">
            {props.pictures.map((picture, index) => (
              <img
                key={index + logementsId}
                src={picture}
                alt={`${props.title} en détail`}
                style={{ transform: `translateX(-${currentSlide * 100}%)` }}
              />
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

Carousel.propTypes = {
  title: PropTypes.string.isRequired,
  pictures: PropTypes.array.isRequired,
};

export default Carousel;
