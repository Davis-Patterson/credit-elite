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
          <div className='home-button'>
            <p className='home-button-text'>BUTTON</p>
          </div>
          <div className='home-button'>
            <p className='home-button-text'>BUTTON</p>
          </div>
          <div className='home-button'>
            <p className='home-button-text'>BUTTON</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
