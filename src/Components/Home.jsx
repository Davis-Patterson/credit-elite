import React from 'react';
import { Link } from 'react-router-dom';
import LPLogoBlack from 'assets/lp-full-black.svg';
import LPLogoWhite from 'assets/lp-full-white.svg';

const Home = ({ darkMode }) => {
  const currentLogo = darkMode ? LPLogoWhite : LPLogoBlack;

  return (
    <>
      <div className='home-container'>
        <section className='title-container'>
          <img className='RR-Logo' src={currentLogo} alt='CE-Logo' />
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
            <p className='home-button-text'>Check Your Score For $1</p>
          </a>
          <a
            className='home-button'
            href='https://self.inc/refer/18517291'
            target='_blank'
            rel='noopener noreferrer'
          >
            <p className='home-button-text'>Build Credit</p>
          </a>
          <a
            className='home-button'
            href='https://kikoff.com/refer/LV6SKBTN'
            target='_blank'
            rel='noopener noreferrer'
          >
            <p className='home-button-text'>Build Credit</p>
          </a>
          <a
            className='home-button'
            href='https://meetava.app.link/TrxLfA7l1Jb'
            target='_blank'
            rel='noopener noreferrer'
          >
            <p className='home-button-text'>Build Credit</p>
          </a>
          <a
            className='home-button'
            href='https://creditstrong.referralrock.com/l/3LUIS433/ '
            target='_blank'
            rel='noopener noreferrer'
          >
            <p className='home-button-text'>Build Credit</p>
          </a>
          {/* <Link to='/contact' className='home-button'>
            <p className='home-button-text'>Contact Us Here</p>
          </Link> */}
          {/* <Link to='/schedule' className='home-button'>
            <p className='home-button-text'>Book a 1:1 Consultation Here</p>
          </Link> */}
        </section>
      </div>
    </>
  );
};

export default Home;
