import React from 'react';
import { Link } from 'react-router-dom';
import LVLogoBlack from '/src/assets/LV-logo-black.png';
import LVLogoWhite from '/src/assets/LV-logo-white.png';
import RRLogoBlack from '/src/assets/RR-logo-black.png';
import RRLogoWhite from '/src/assets/RR-logo-white.png';

const Home = ({ darkMode }) => {
  return (
    <>
      <div className='home-container'>
        <section className='title-container'>
          <img
            className='RR-Logo'
            src={darkMode ? RRLogoWhite : RRLogoBlack}
            alt='CE-Logo'
          />
          <p className='sub-title'>by LUIS PEGUERO</p>
        </section>
        <hr className='contact-page-break' />
        <section className='button-container'>
          <a
            className='home-button'
            href='https://myfreescorenow.com/enroll/?AID=CREDITELITE&PID=48157'
            target='_blank'
            rel='noopener noreferrer'
          >
            <p className='home-button-text'>Check Your Credit Here</p>
          </a>
          <Link to='/contact' className='home-button'>
            <p className='home-button-text'>Contact Us Here</p>
          </Link>
          <Link to='/schedule' className='home-button'>
            <p className='home-button-text'>Book a 1:1 Consultation Here</p>
          </Link>
        </section>
      </div>
    </>
  );
};

export default Home;
