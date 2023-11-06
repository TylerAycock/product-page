import "./Carousel.css"
import { CarouselData } from "./CarouselData";
import { useState } from "react";
import { FaArrowAltCircleRight, FaArrowAltCircleLeft } from "react-icons/fa";
import {AiOutlineClose} from 'react-icons/ai'

const Carousel = () => {
    const [carousel, setCarousel] = useState(false)
  const [current, setCurrent] = useState(0);
  const length = CarouselData.length;

  const nextSlide = () => {
    console.log("next");
  };

  const prevSlide = () => {
    console.log("previous");
  };

  return (
    <div className="carousel__container">
      <div className="carousel__overlay" onClick={()=>setCarousel(!carousel)}>
        <div className="carousel__data">
          <FaArrowAltCircleLeft className="left-arrow" onClick={prevSlide} />
          <FaArrowAltCircleRight className="right-arrow" onClick={nextSlide} />
          {CarouselData.map((pic, index) => {
            return <img src={pic.image} alt="shoe pic" />;
          })}
        <AiOutlineClose className="close__carousel"/>
        </div>
      </div>
    </div>
  );
};

export default Carousel;
