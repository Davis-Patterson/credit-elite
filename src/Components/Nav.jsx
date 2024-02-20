import React, { useState, useEffect, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import logoImg from '/src/assets/credit-elite-small-white.png';
import IGlogo from '/src/assets/IG_logo_white.svg';
import MaterialUISwitch from './MaterialUISwitch';
import DehazeIcon from '@mui/icons-material/Dehaze';

const Nav = ({ darkMode, setDarkMode }) => {
  const [dropdown, setDropdown] = useState(false);

  const { pathname } = useLocation();

  const dropdownRef = useRef(null);
  const menuIconRef = useRef(null);

  const handleDarkModeChange = (event) => {
    setDarkMode(!darkMode);
  };

  useEffect(() => {
    if (darkMode) {
      document.body.classList.add('darkMode');
    } else {
      document.body.classList.remove('darkMode');
    }
  }, [darkMode]);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target) &&
        menuIconRef.current &&
        !menuIconRef.current.contains(event.target)
      ) {
        setDropdown(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [dropdown]);

  const isActive = (path) =>
    pathname === path || (path === '/home' && pathname === '/');

  const handleMenu = () => {
    setDropdown(!dropdown);
  };

  const handleDropdown = () => {
    setDropdown(false);
  };

  return (
    <>
      <div className='nav-container'>
        <div className='logo-container' id='LOGO'>
          <Link to='/home' className='home-link'>
            <img className='logo-img' src={logoImg} alt='Logo Img' />
          </Link>
        </div>
        <div className='social-container'>
          <a
            href='https://www.instagram.com/credit_elite'
            className='IG-link-nav'
            target='_blank'
            rel='noopener noreferrer'
          >
            <img src={IGlogo} alt='IG logo' className='IG-logo-nav' />
          </a>
        </div>
        <div className='switch-container' id='SWITCH'>
          <MaterialUISwitch
            checked={darkMode}
            onChange={handleDarkModeChange}
            className='dark-toggle'
          />
        </div>
        <div className='link-container'>
          <DehazeIcon
            className='menu-icon'
            onClick={handleMenu}
            ref={menuIconRef}
            id='menu-icon'
            style={{ display: 'none' }}
          />
          <Link
            to='/home'
            className={`contact-link ${isActive('/home') ? 'active' : ''}`}
          >
            <p className='contact-link-button'>HOME</p>
          </Link>
          <Link
            to='/about'
            className={`contact-link ${isActive('/about') ? 'active' : ''}`}
          >
            <p className='contact-link-button'>ABOUT</p>
          </Link>
          <Link
            to='/contact'
            className={`contact-link ${isActive('/contact') ? 'active' : ''}`}
          >
            <p className='contact-link-button'>CONTACT</p>
          </Link>
          <Link
            to='/schedule'
            className={`contact-link ${isActive('/schedule') ? 'active' : ''}`}
          >
            <p className='contact-link-button'>SCHEDULE</p>
          </Link>
        </div>
      </div>
      {dropdown && (
        <div className='dropdown-menu' ref={dropdownRef}>
          <div className='dropdown-box'>
            <Link
              to='/home'
              className={`dropdown-link ${isActive('/home') ? 'active' : ''}`}
              onClick={handleDropdown}
            >
              <p className='dropdown-link-button'>HOME</p>
            </Link>
          </div>
          <div className='dropdown-box'>
            <Link
              to='/about'
              className={`dropdown-link ${isActive('/about') ? 'active' : ''}`}
              onClick={handleDropdown}
            >
              <p className='dropdown-link-button'>ABOUT</p>
            </Link>
          </div>
          <div className='dropdown-box'>
            <Link
              to='/contact'
              className={`dropdown-link ${
                isActive('/contact') ? 'active' : ''
              }`}
              onClick={handleDropdown}
            >
              <p className='dropdown-link-button'>CONTACT</p>
            </Link>
          </div>
          <div className='dropdown-box'>
            <Link
              to='/schedule'
              className={`dropdown-link ${
                isActive('/schedule') ? 'active' : ''
              }`}
              onClick={handleDropdown}
            >
              <p className='dropdown-link-button'>SCHEDULE</p>
            </Link>
          </div>
        </div>
      )}
    </>
  );
};

export default Nav;
