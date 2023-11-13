import "./NavLinks.css";
import { delay, motion } from "framer-motion";

const NavLinks = (props) => {
  const animateFrom = { opacity: 0, y: -40 };
  const animateTo = { opacity: 1, y: 0 };
  return (
    <ul>
      <motion.a
        href="#"
        initial={animateFrom}
        animate={animateTo}
        transition={{ delay: 0.05 }}
        onClick={() => props.isMobile && props.closeMobileMenu()}
      >
        Collections
      </motion.a>
      <motion.a
        href="#"
        initial={animateFrom}
        animate={animateTo}
        transition={{ delay: 0.15 }}
        onClick={() => props.isMobile && props.closeMobileMenu()}
      >
        Men
      </motion.a>
      <motion.a
        href="#"
        initial={animateFrom}
        animate={animateTo}
        transition={{ delay: 0.25 }}
        onClick={() => props.isMobile && props.closeMobileMenu()}
      >
        Women
      </motion.a>
      <motion.a
        href="#"
        initial={animateFrom}
        animate={animateTo}
        transition={{ delay: 0.35 }}
        onClick={() => props.isMobile && props.closeMobileMenu()}
      >
        About
      </motion.a>
      <motion.a
        href="#"
        initial={animateFrom}
        animate={animateTo}
        transition={{ delay: 0.45 }}
        onClick={() => props.isMobile && props.closeMobileMenu()}
      >
        Contact
      </motion.a>
    </ul>
  );
};

export default NavLinks;
