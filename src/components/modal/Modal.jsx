import "./Modal.css";

const Modal = ({ modal, setModal }) => {
  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <h2>Hello Modal</h2>
        <p>Nothing in your cart</p>
        <button className="close-modal" onClick={setModal(!modal)}>X</button>
      </div>
    </div>
  );
};

export default Modal;
