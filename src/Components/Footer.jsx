import React, { useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import logoImg from '/src/assets/credit-elite-small.png';
import logoImgWhite from '/src/assets/credit-elite-small-white.png';

const Footer = ({ darkMode, setDarkMode }) => {
  const currentLogo = darkMode ? logoImgWhite : logoImg;

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
        <p className='footer-text'>© Copyright 2024 CREDIT ELITE</p>
      </div>
    </>
  );
};

export default Footer;
