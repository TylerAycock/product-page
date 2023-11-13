import "./NavLinks.css";

const NavLinks = (props) => {
  return (
    <ul>
      <a href="#" onClick={() => props.isMobile && props.closeMobileMenu()}>
        Collections
      </a>
      <a href="#" onClick={() => props.isMobile && props.closeMobileMenu()}>
        Men
      </a>
      <a href="#" onClick={() => props.isMobile && props.closeMobileMenu()}>
        Women
      </a>
      <a href="#" onClick={() => props.isMobile && props.closeMobileMenu()}>
        About
      </a>
      <a href="#" onClick={() => props.isMobile && props.closeMobileMenu()}>
        Contact
      </a>
    </ul>
  );
};

export default NavLinks;
