import React, { useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import logoImg from '/src/assets/credit-elite-small.png';
import logoImgWhite from '/src/assets/credit-elite-small-white.png';

const Footer = ({ darkMode, setDarkMode }) => {
  const currentLogo = darkMode ? logoImgWhite : logoImg;
  const location = useLocation();

  useEffect(() => {
    if (darkMode) {
      document.body.classList.add('darkMode');
    } else {
      document.body.classList.remove('darkMode');
    }
  }, [darkMode]);

  return (
    <>
      <div className='footer-container'>
        <div className='footer-link-container'>
          {location.pathname !== '/home' && (
            <Link to='/home' className='footer-link'>
              <p className='footer-link-button'>HOME</p>
            </Link>
          )}
          {location.pathname !== '/contact' && (
            <Link to='/contact' className='footer-link'>
              <p className='footer-link-button'>CONTACT</p>
            </Link>
          )}
          {location.pathname !== '/schedule' && (
            <Link to='/schedule' className='footer-link'>
              <p className='footer-link-button'>SCHEDULE</p>
            </Link>
          )}
          {location.pathname !== '/admin' &&
            location.pathname !== '/authorize' && (
              <Link to='/admin' className='footer-link'>
                <p className='footer-link-button'>ADMIN</p>
              </Link>
            )}
        </div>
        <p className='footer-text'>© Copyright 2024 CREDIT ELITE</p>
      </div>
    </>
  );
};

export default Footer;
