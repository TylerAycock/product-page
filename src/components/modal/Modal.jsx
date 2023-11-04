import "./Modal.css";
import one from "../../assets/images/image-product-1-thumbnail.jpg";
import { BiTrash } from "react-icons/bi";

const Modal = ({ modal, setModal, quantity }) => {
  const clickHandler = () => {
    console.log(`modal quantity: ${quantity}`);
    setModal(!modal);
  };

  const cost = `$${+quantity * 125}.00 `;

  return (
    <div className="modal__container">
      <h2>Cart</h2>
      <div className="modal__item">
        <img src={one} alt="" />
        <div className="item__pricing">
          <p>Fall Limited Edition Sneakers</p>
          <p>
            $125.00 x {quantity} <span className="cost">{cost}</span>
          </p>
        </div>
        <BiTrash className="trash" />
      </div>
      <button onClick={() => clickHandler()}>Checkout</button>
    </div>
  );
};

export default Modal;
