import React from 'react';
import CELogo from '/src/assets/credit-elite-logo.png';
import CELogoInvert from '/src/assets/credit-elite-logo-white.png';

const Home = ({ darkMode }) => {
  return (
    <>
      <div className='home-container'>
        <div className='title-container'>
          <img
            className='CE-Logo'
            src={darkMode ? CELogoInvert : CELogo}
            alt='CE-Logo'
          />
          <p className='sub-title'>by LUIS PEGUERO</p>
        </div>
        <div className='button-container'>
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
          <a
            className='home-button'
            href='https://credit-elite.netlify.app/'
            target='_blank'
            rel='noopener noreferrer'
          >
            <p className='home-button-text'>BUTTON</p>
          </a>
        </div>
      </div>
    </>
  );
};

export default Home;
