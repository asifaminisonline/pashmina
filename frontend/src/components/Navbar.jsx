import { useState } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

function TopNavbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <div className="navbar-logo">
          <Link to="/" className="link">
            Pashmina Designs
          </Link>
        </div>

        <div className="menu-items">
          <Link to="/designs" className="link">
            Designs
          </Link>
          <Link to="/add-design" className="link">
            Add Your Designs
          </Link>
        </div>

        <div className="icons">
          <form className="search-form">
            <input type="text" placeholder="Search" className="search-input" />
            <button type="submit" className="search-button">
              Search
            </button>
          </form>
        </div>

        <div className="mobile-menu-icon" onClick={toggleMenu}>
          &#9776;
        </div>
      </div>

      {isMenuOpen && (
        <div className="mobile-menu">
          <Link
            to="/designs"
            className="link"
            onClick={() => setIsMenuOpen(false)}
          >
            Designs
          </Link>
          <Link
            to="/add-design"
            className="link"
            onClick={() => setIsMenuOpen(false)}
          >
            Add Your Designs
          </Link>
          {/* <Link>
          <div className="icons">
          <form className="mobile-search-form">
            <input
              type="text"
              placeholder="Search"
              className="search-input"
            />
            <button type="submit" className="search-button">
              Search
            </button>
          </form>
        </div>
        </Link> */}
        </div>
      )}
    </nav>
  );
}

export default TopNavbar;
