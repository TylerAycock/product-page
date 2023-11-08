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
import Modal from "./modal/Modal";

const Shoe = ({ modal, setModal, carousel, setCarousel }) => {
  const [count, setCount] = useState(0);
  const [quantity, setQuantity] = useState(0);
  const [image, setImage] = useState(`${oneMain}`);

  const engageCarousel = () => {
    console.log('carousel toggled')
    setCarousel(!carousel)
  }
  return (
    <main className="product__container">
      {modal && (
        <Modal
          modal={modal}
          setModal={setModal}
          quantity={quantity}
          setQuantity={setQuantity}
          count={count}
          setCount={setCount}
        />
      )}
      <div className="images__container">
        <img src={image} onClick={() => engageCarousel()} id="main__img"/>
        <div className="thumbnails">
          <img
            src={one}
            className="thumbnail one"
            onMouseEnter={() => {
              setImage(`${oneMain}`);
            }}
          />
          <img
            src={two}
            className="thumbnail two"
            onMouseEnter={() => {
              setImage(`${twoMain}`);
            }}
          />
          <img
            src={three}
            className="thumbnail three"
            onMouseEnter={() => {
              setImage(`${threeMain}`);
            }}
          />
          <img
            src={four}
            className="thumbnail"
            onMouseEnter={() => {
              setImage(`${fourMain}`);
            }}
          />
        </div>
      </div>
      <div className="details__container">
        <h2>Sneaker Company</h2>
        <h3>Fall Limited Edition Sneakers</h3>
        <section>
          These low-profile sneakers are your perfect casual wear companion.
          Featuring a durable rubber outer sole, they’ll withstand everything
          the weather can offer.
        </section>
        <div className="cost__container">
          <p className="cost">$125.00</p>
          <p className="discount">50%</p>
        </div>
        <p className="original-price">$250.00</p>
        <Buttons
          quantity={quantity}
          setQuantity={setQuantity}
          count={count}
          setCount={setCount}
        />
      </div>
    </main>
  );
};

export default Shoe;
