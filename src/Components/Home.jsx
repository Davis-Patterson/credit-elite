import React from 'react';
import { Link } from 'react-router-dom';
import CELogo from '/src/assets/credit-elite-logo.png';
import CELogoInvert from '/src/assets/credit-elite-logo-white.png';

const Home = ({ darkMode }) => {
  return (
    <>
      <div className='home-container'>
        <section className='title-container'>
          <img
            className='CE-Logo'
            src={darkMode ? CELogoInvert : CELogo}
            alt='CE-Logo'
          />
          <p className='sub-title'>by LUIS PEGUERO</p>
        </section>
        <hr className='contact-page-break' />
        <section className='button-container'>
          <a
            className='home-button'
            href='https://www.identityiq.com/sc-securepreferred.aspx?offercode=4312844H'
            target='_blank'
            rel='noopener noreferrer'
          >
            <p className='home-button-text'>IDENTITY IQ</p>
          </a>
          <a
            className='home-button'
            href='https://www.myscoreiq.com/get-fico-max.aspx?offercode=432135TY'
            target='_blank'
            rel='noopener noreferrer'
          >
            <p className='home-button-text'>SCORE IQ</p>
          </a>
          <Link to='/schedule' className='home-button'>
            <p className='home-button-text'>BOOK A CONSULTATION</p>
          </Link>
        </section>
      </div>
    </>
  );
};

export default Home;
