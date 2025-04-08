import './navbar.scss';
import logo from '../../assets/logo.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch, faShoppingCart, faHeart, faUser } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <div>
      <nav className="navbar navbar-expand-lg bg-body-tertiary fixed-top">
        <div className="container">
          <a className="navbar-brand" href="#">
            <img src={logo} width="50" height="32" alt="Logo" /> Furniro
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarTogglerDemo02"
            aria-controls="navbarTogglerDemo02"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>

          <div className="collapse navbar-collapse justify-content-center" id="navbarTogglerDemo02">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0 mx-auto">
              <li className="nav-item">
                <Link to="/">
                  <a className="nav-link" aria-current="page">
                    Home
                  </a>
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/shop">
                  <a className="nav-link">Shop</a>
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/contact">
                  <a className="nav-link">Contact</a>
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/blog">
                  <a className="nav-link">Blog</a>
                </Link>
              </li>
            </ul>
            <div className="d-flex gap-4">
              <div className="nav-icon">
                <FontAwesomeIcon icon={faSearch} />
              </div>
              <div className="nav-icon">
                <FontAwesomeIcon icon={faShoppingCart} />
              </div>
              <div className="nav-icon">
                <FontAwesomeIcon icon={faHeart} />
              </div>
              <div className="nav-icon">
                <FontAwesomeIcon icon={faUser} />
              </div>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
