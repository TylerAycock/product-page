import { CarouselData } from "../carousel/CarouselData";
import "./MobileCarousel.css";
import { useState } from "react";
import { FaArrowAltCircleRight, FaArrowAltCircleLeft } from "react-icons/fa";

const MobileCarousel = () => {
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
    <div className="mobile__carousel">
      <FaArrowAltCircleLeft className="left-arrow" onClick={prevSlide} />
      <FaArrowAltCircleRight className="right-arrow" onClick={nextSlide} />
      {CarouselData.map((pic, index) => {
        return (
          <div
            className={index === current ? "slide active" : "slide"}
            key={index}
          >
            {index === current && (
              <img src={pic.image} alt="shoe pic" className="large__img" />
            )}
          </div>
        );
      })}
    </div>
  );
};

export default MobileCarousel;
