import "./Modal.css";
import one from "../../assets/images/image-product-1-thumbnail.jpg";
import {BiTrash} from 'react-icons/bi';

const Modal = ({ modal, setModal, quantity }) => {
  return (
    <div className="modal__container">
      <h2>Cart</h2>
      <div className="modal__item">
        <img src={one} alt="" />
        <div className="item__pricing">
          <p>Fall Limited Edition Sneakers</p>
          <p>$125.00 x {quantity} <span className="cost">$375.00</span></p>
        </div>
        <BiTrash className="trash"/>
      </div>
      <button onClick={() => setModal(!modal)}>Checkout</button>
    </div>
  );
};

export default Modal;
