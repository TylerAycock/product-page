import "./App.css";
import Header from "./components/Header";
import Shoe from "./components/Shoe";
import { useState } from "react";
import Carousel from "./components/carousel/Carousel";

function App() {
  const [modal, setModal] = useState(false);
  const [carousel, setCarousel] = useState(false);
  const [quantity, setQuantity] = useState(0);
  console.log(carousel)

  return (
    <div className="main__container">
      <Header modal={modal} setModal={setModal} quantity={quantity} setQuantity={setQuantity} />
      <Shoe
        modal={modal}
        setModal={setModal}
        carousel={carousel}
        setCarousel={setCarousel}
        quantity={quantity} setQuantity={setQuantity}
      />
      {carousel && <Carousel carousel={carousel} setCarousel={setCarousel} />}
    </div>
  );
}

export default App;
