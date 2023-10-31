import Buttons from "./Buttons";
import "./Shoe.css";
import { useState } from "react";
import one from "../assets/images/image-product-1.jpg";
import thumbnail from "../assets/images/image-product-1-thumbnail.jpg";

const Shoe = () => {
  return (
    <main className="product__container">
      <div className="images__container">
        <img src={one} alt="" />
        <div className="thumbnails">
          <img src={thumbnail} className="thumbnail" />
          <img src={thumbnail} className="thumbnail" />
          <img src={thumbnail} className="thumbnail" />
          <img src={thumbnail} className="thumbnail" />
        </div>
      </div>
      <div className="details__container">
        <h2>Sneaker Company</h2>
        <h3>Fall Limited Edition Sneakers</h3>
        <p>
          These low-profile sneakers are your perfect casual wear companion.
          Featuring a durable rubber outer sole, they’ll withstand everything
          the weather can offer.
        </p>
        <div className="cost__container">
          <p className="cost">$125.00</p>
          <p className="discount">50%</p>
        </div>
        <p className="prev-price">$250.00</p>
      </div>
      <Buttons />
    </main>
  );
};

export default Shoe;
