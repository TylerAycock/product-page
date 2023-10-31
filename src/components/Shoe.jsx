import Buttons from "./Buttons";
import "./Shoe.css";
import { useState } from "react";
import oneMain from "../assets/images/image-product-1.jpg";
import twoMain from "../assets/images/image-product-2.jpg";
import threeMain from "../assets/images/image-product-3.jpg";
import fourMain from "../assets/images/image-product-4.jpg";
import one from "../assets/images/image-product-1-thumbnail.jpg";
import two from "../assets/images/image-product-2-thumbnail.jpg";
import three from "../assets/images/image-product-3-thumbnail.jpg";
import four from "../assets/images/image-product-4-thumbnail.jpg";


const Shoe = () => {
    const [image, setImage] =useState(`${twoMain}`)

  return (
    <main className="product__container">
      <div className="images__container">
        <img src={image} />
        <div className="thumbnails">
          <img src={one} className="thumbnail one" onClick={()=>setImage(`${oneMain}`)}/>
          <img src={two} className="thumbnail two" onClick={()=>setImage(`${twoMain}`)}/>
          <img src={three} className="thumbnail three" onClick={()=>setImage(`${threeMain}`)}/>
          <img src={four} className="thumbnail" onClick={()=>setImage(`${fourMain}`)}/>
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
