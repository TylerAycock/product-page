import { useState } from "react";
import "./Header.css";
import avatar from "../assets/images/image-avatar.png";
import { AiOutlineShoppingCart } from "react-icons/ai";
import NavBar from "./Navbar";
import MobileNav from "./mobileNav/MobileNav";

const Header = ({ modal, setModal, quantity, setQuantity }) => {
  const clickHandler = () => {
    setModal(!modal);
  };

  return (
    <header className="header__container">
      <div className="left-side__container">
        <MobileNav />
        <h1>sneakers</h1>
        <NavBar />
      </div>
      <div className="right-side__container">
        <div className="cart__container">
          <div className="cart__count">{quantity > 0 && quantity}</div>
          <AiOutlineShoppingCart
            className="shopping-cart"
            onClick={clickHandler}
          />
        </div>
        <img
          src={avatar}
          alt="user avatar"
          className="avatar"
          onClick={clickHandler}
        />
      </div>
    </header>
  );
};

export default Header;
