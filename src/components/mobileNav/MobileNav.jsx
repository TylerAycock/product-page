import NavLinks from "../NavLinks";
import "./MobileNav.css";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import { useState } from "react";

const MobileNav = () => {
  const [menu, setMenu] = useState(false);

  const closeMobileMenu = () => setMenu(false)

  const hamburgerIcon = (
    <AiOutlineMenu
      className="hamburger"
      size="35px"
      onClick={() => setMenu(!menu)}
    />
  );

  const closeIcon = (
    <AiOutlineClose
      className="close-icon"
      size="35px"
      onClick={() => setMenu(!menu)}
    />
  );
  return (
    <nav className="mobile__nav">
      {menu ? closeIcon : hamburgerIcon}
      {menu && <NavLinks isMobile={true} closeMobileMenu={closeMobileMenu}/>}
    </nav>
  );
};

export default MobileNav;
