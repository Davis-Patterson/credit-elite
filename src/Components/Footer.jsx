import React, { useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';

const Footer = ({ token, setToken }) => {
  const location = useLocation();

  const handleLogout = () => {
    setToken('');
  };

  return (
    <>
      <div className='footer-container'>
        <div className='footer-link-container'>
          {location.pathname !== '/home' && (
            <Link to='/home' className='footer-link'>
              <p className='footer-link-button'>HOME</p>
            </Link>
          )}
          {location.pathname !== '/about' && (
            <Link to='/about' className='footer-link'>
              <p className='footer-link-button'>ABOUT</p>
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
          {token !== '' && (
            <p onClick={handleLogout} className='footer-link-button'>
              LOGOUT
            </p>
          )}
        </div>
        <p className='footer-text'>© Copyright 2023 CREDIT ELITE</p>
      </div>
    </>
  );
};

export default Footer;
