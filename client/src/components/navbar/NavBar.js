import React, {useState, useEffect} from 'react';
import {Link, Redirect} from 'react-router-dom';
import EventIcon from '@material-ui/icons/Event';
import MenuIcon from '@material-ui/icons/Menu';
import MenuOpenIcon from '@material-ui/icons/MenuOpen';
import {Button} from '../Button/Button';
import './NavBar.css';      // Modified from: https://github.com/briancodex/react-website-v2/blob/master/src/components/Navbar.css

function NavBar() {
  const [clicked, setClicked] = useState(false);
  const [loginButton, setLoginButton] = useState(true);

  const handleClick = () => setClicked(!clicked);
  const closeMobileMenu = () => setClicked(false);

  const showLoginButton = () => {
    if(window.innerWidth <= 960) {
      setLoginButton(false);
    } else {
      setLoginButton(true);
    }
  }

  useEffect(() => {
    showLoginButton();
  }, []); 

  window.addEventListener('resize', showLoginButton);

  return (
    <>
      <div className="navbar">
        <div className="navbar-container container">
          <Link to='/' className="navbar-logo" onClick={closeMobileMenu}>
            <EventIcon className="navbar-icon"> </EventIcon>
            RecCenter Booking
          </Link>
          <div className="menu-icon" onClick={handleClick}>
            {
              clicked ? <MenuOpenIcon /> : <MenuIcon />
            }
          </div>
          <ul className={clicked ? 'nav-menu active': 'nav-menu'}>
            <li className="nav-item">
              <Link to='/' className="nav-links" onClick={closeMobileMenu}>
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link to='/about' className="nav-links" onClick={closeMobileMenu}>
                About
              </Link>
            </li>
            <li className="nav-login-btn">
              {
                loginButton ? (
                  <Link to='/centre/login' className="login-btn-link">
                    <Button buttonStyle='btn--outline'> Centre Login </Button>
                  </Link>) : (
                    <Link to='/centre/login' className="login-btn-link" onClick={closeMobileMenu}>
                      <Button buttonStyle="btn--outline" buttonSize='btn--mobile'> Centre Login </Button>
                    </Link>
                  )
              }
            </li>
            <li className="nav-login-btn">
              {
                loginButton ? (
                  <Link to='/user/login' className="login-btn-link">
                    <Button buttonStyle='btn--outline'> User Login </Button>
                  </Link>) : (
                    <Link to='/user/login' className="login-btn-link" onClick={closeMobileMenu}>
                      <Button buttonStyle="btn--outline" buttonSize='btn--mobile'> User Login </Button>
                    </Link>
                  )
              }
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}

export default NavBar;