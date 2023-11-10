import "./Hamburger.css";

const Hamburger = () => {
  return (
    <div className="hamburger__container">
      <label className="hamburger-menu">
        <input type="checkbox" />
      </label>
      <aside className="sidebar">
        <nav>
          <a href="#">Collections</a>
          <a href="#">Men</a>
          <a href="#">Women</a>
          <a href="#">About</a>
          <a href="#">Contact</a>
        </nav>
      </aside>
    </div>
  );
};

export default Hamburger;
