import "./Carousel.css";
import { CarouselData } from "./CarouselData";
import { useState } from "react";
import { FaArrowAltCircleRight, FaArrowAltCircleLeft } from "react-icons/fa";
import { AiOutlineClose } from "react-icons/ai";

const Carousel = ({ carousel, setCarousel }) => {
  const [current, setCurrent] = useState(0);
  const length = CarouselData.length;

  if (!Array.isArray(CarouselData) || CarouselData.length <= 0) {
    return null;
  }

  const nextSlide = () => {
    setCurrent(current === length - 1 ? 0 : current + 1);
  };

  const prevSlide = () => {
    setCurrent(current === 0 ? length - 1 : current - 1);
  };

  return (
    <div className="carousel__container">
      <div className="carousel__overlay">
        <div className="carousel__data">
          {CarouselData.map((pic, index) => {
            return (
              <div
                className={index === current ? "slide active" : "slide"}
                key={index}
              >
                <FaArrowAltCircleLeft
                  className="left-arrow"
                  onClick={prevSlide}
                />
                <FaArrowAltCircleRight
                  className="right-arrow"
                  onClick={nextSlide}
                />
                <AiOutlineClose
                  className="close__carousel"
                  onClick={() => setCarousel(!carousel)}
                />
                {index === current && <img src={pic.image} alt="shoe pic" className="large__img"/>}
              </div>
            );
          })}
          <div className="carousel__thumbnails">
            {CarouselData.map((pic, index) => {
              return (
                <img
                  src={pic.thumbnail}
                  alt=""
                  className="carousel__thumbnail"
                />
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Carousel;
