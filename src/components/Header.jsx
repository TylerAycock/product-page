import { useState } from "react";
import "./Header.css";
import avatar from "../assets/images/image-avatar.png";
import { AiOutlineShoppingCart } from "react-icons/ai";

const Header = ({ modal, setModal }) => {
  const clickHandler = () => {
    console.log(modal);
    setModal(!modal);
  };

  return (
    <header className="header__container">
      <div className="left-side__container">
        <h1>sneakers</h1>
        <nav>
          <a href="#">Collections</a>
          <a href="#">Men</a>
          <a href="#">Women</a>
          <a href="#">About</a>
          <a href="#">Contact</a>
        </nav>
      </div>
      <div className="right-side__container">
        <AiOutlineShoppingCart
          className="shopping-cart"
          onClick={clickHandler}
        />
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
