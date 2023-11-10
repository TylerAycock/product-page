import { useState } from "react";
import "./Header.css";
import avatar from "../assets/images/image-avatar.png";
import { AiOutlineShoppingCart } from "react-icons/ai";
import Hamburger from "./mobileNav/Hamburger";

const Header = ({ modal, setModal, quantity, setQuantity }) => {
  const clickHandler = () => {
    setModal(!modal);
  };

  return (
    <header className="header__container">
      <div className="left-side__container">
        <Hamburger />
        <h1>sneakers</h1>
        <nav className="navbar">
          <a href="#">Collections</a>
          <a href="#">Men</a>
          <a href="#">Women</a>
          <a href="#">About</a>
          <a href="#">Contact</a>
        </nav>
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
