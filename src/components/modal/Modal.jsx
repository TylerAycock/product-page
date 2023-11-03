import "./Modal.css";
import one from "../../assets/images/image-product-1-thumbnail.jpg";

const Modal = ({ modal, setModal }) => {
  return (
    <div className="modal__container">
      <h2>cart</h2>
      <div className="modal__item">
        <img src={one} alt="" />
        <p>one fresh pair of shoes</p>
      </div>
      <button onClick={() => setModal(!modal)}>checkout</button>
    </div>
  );
};

export default Modal;
