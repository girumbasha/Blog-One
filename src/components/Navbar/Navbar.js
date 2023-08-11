import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css'; // Import your component's styles
import { GiHamburgerMenu } from 'react-icons/gi';
import { MdOutlineCancel } from 'react-icons/md';

function Navbar() {
  const [toggleMenu, setToggleMenu] = useState(false);

  return (
    <>
      <nav className='Navbar__container'>
        <p className='logo__text'>Blog Website</p>
        <div className='nav__links'>
          <Link to='/'>Home</Link>
          <Link to='/before'>Before Modern Society</Link>
          <Link to='/technology'>Technology</Link>
          <Link to='/future'>Future</Link>
        </div>
      </nav>
      <div className='navbar__small_screen'>
        <GiHamburgerMenu
          className='humburger'
          onClick={() => setToggleMenu(true)}
        />
        {toggleMenu && (
          <div className='over__lay'>
            <MdOutlineCancel
              fontSize={27}
              className='close'
              onClick={() => setToggleMenu(false)}
            />
            <div className='small__screen_link'>
              <Link to='/'>Home</Link>
              <Link to='/before'>Before Modern Society</Link>
              <Link to='/technology'>Technology</Link>
              <Link to='/future'>Future</Link>
            </div>
          </div>
        )}
      </div>
    </>
  );
}

export default Navbar;
