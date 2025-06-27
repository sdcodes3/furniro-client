import { useState } from 'react';
import './navbar.scss';
import logo from '../../assets/logo.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch, faShoppingCart, faHeart, faUser } from '@fortawesome/free-solid-svg-icons';
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { useSignoutMutation } from '../../slices/user.api.slice';
import { signout } from '../../slices/auth.slice';
import { LogOut } from 'lucide-react';

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [signoutApiCall] = useSignoutMutation();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const toggleMenu = () => {
    setMenuOpen((prev) => !prev);
  };

  const closeMenu = () => {
    setMenuOpen(false);
  };

  interface SignOutEvent extends React.MouseEvent<HTMLButtonElement | SVGSVGElement, MouseEvent> {}

  const onClickSignOut = async (event: SignOutEvent): Promise<void> => {
    event.preventDefault();
    try {
      await signoutApiCall({}).unwrap();
      dispatch(signout());
      navigate('/signin');
    } catch (err: any) {
      console.log('signout failed: ', err);
      alert(err?.data?.message || 'signout failed');
    }
  };

  return (
    <nav className="navbar navbar-expand-lg bg-white shadow-sm py-3">
      <div className="container">
        {/* Logo and Brand */}
        <a className="navbar-brand d-flex align-items-center gap-2" href="#">
          <img src={logo} width="50" height="32" alt="Logo" className="me-2" />
          <span className="furniro-brand text-dark">Furniro</span>
        </a>

        {/* Toggle Button */}
        <button
          className="navbar-toggler"
          type="button"
          aria-label="Toggle navigation"
          onClick={toggleMenu}
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* Collapse menu */}
        <div className={`collapse navbar-collapse ${menuOpen ? 'show' : ''}`} id="navbarNav">
          {/* Nav Links */}
          <ul className="navbar-nav mx-auto text-center gap-lg-4 gap-2">
            <li className="nav-item">
              <Link to="/" className="nav-link nav-link-custom" onClick={closeMenu}>
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/shop" className="nav-link nav-link-custom" onClick={closeMenu}>
                Shop
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/blog" className="nav-link nav-link-custom" onClick={closeMenu}>
                Blog
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/contact" className="nav-link nav-link-custom" onClick={closeMenu}>
                Contact
              </Link>
            </li>
          </ul>

          {/* Icons + Logout */}
          <div className="d-flex flex-column flex-lg-row align-items-center gap-3 mt-3 mt-lg-0">
            <div className="d-flex justify-content-center justify-content-lg-end gap-3">
              <FontAwesomeIcon icon={faUser} className="text-dark fs-5 cursor-pointer" />
              <FontAwesomeIcon icon={faSearch} className="text-dark fs-5 cursor-pointer" />
              <FontAwesomeIcon icon={faHeart} className="text-dark fs-5 cursor-pointer" />
              <FontAwesomeIcon icon={faShoppingCart} className="text-dark fs-5 cursor-pointer" />
              <LogOut
                className="text-dark cursor-pointer"
                size={20}
                onClick={onClickSignOut}
                aria-label="Logout"
              />
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
