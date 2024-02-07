import React, { useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import logoImg from '/src/assets/favicon-32x32.png';
import logoImgLight from '/src/assets/favicon-32x32-light.png';
import MaterialUISwitch from './MaterialUISwitch';

const Nav = ({ darkMode, setDarkMode }) => {
  const currentLogo = darkMode ? logoImg : logoImgLight;

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

  return (
    <>
      <div className='nav-container'>
        <div className='logo-container'>
          <Link to='/home' className='home-link'>
            <img className='logo-img' src={currentLogo} alt='Logo Img' />
          </Link>
        </div>
        <div className='switch-container'>
          <MaterialUISwitch
            checked={darkMode}
            onChange={handleDarkModeChange}
            className='dark-toggle'
          />
        </div>
        <div className='social-container'></div>
        <div className='link-container'>
          <Link to='/contact' className='contact-link'>
            <p className='contact-link-button'>CONTACT</p>
          </Link>
        </div>
      </div>
    </>
  );
};

export default Nav;
