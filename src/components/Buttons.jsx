import "./Buttons.css";
import { AiOutlineShoppingCart } from "react-icons/ai";

const Buttons = ({ quantity, setQuantity, count, setCount }) => {
  const clickHandler = (e) => {
    if (e.target.classList.contains("less")) {
      if (count > 0) {
        setCount(count - 1);
      }
    }
    if (e.target.classList.contains("more")) {
      setCount(count + 1);
    }
  };

  const cartHandler = () => {
    setQuantity(() => (quantity = count));
    console.log(`quanitty in buttons: ${quantity}`);
  };

  return (
    <div className="buttons">
      <div className="quantity__container">
        <button onClick={clickHandler} className="less">
          -
        </button>
        <p className="count">{count}</p>
        <button onClick={clickHandler} className="more">
          +
        </button>
      </div>
      <button className="add-to-cart" onClick={cartHandler}>
        <AiOutlineShoppingCart className="cart" />
        Add to cart
      </button>
    </div>
  );
};

export default Buttons;
