import React, { useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import logoImg from '/src/assets/credit-elite-small-white.png';
import IGlogo from '/src/assets/IG_logo_white.svg';
import MaterialUISwitch from './MaterialUISwitch';

const Nav = ({ darkMode, setDarkMode }) => {
  const { pathname } = useLocation();

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

  const isActive = (path) =>
    pathname === path || (path === '/home' && pathname === '/');

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
    </>
  );
};

export default Nav;
