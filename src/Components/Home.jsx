import React, { useContext } from 'react';
import { AppContext } from 'contexts/AppContext';
import { Link } from 'react-router-dom';
import LPLogoBlack from 'assets/lp-full-black.svg';
import LPLogoWhite from 'assets/lp-full-white.svg';

const Home = ({}) => {
  const { darkMode } = useContext(AppContext);

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
            <p className='home-button-text'>Build Credit with "Self"</p>
          </a>
          <a
            className='home-button'
            href='https://kikoff.com/refer/LV6SKBTN'
            target='_blank'
            rel='noopener noreferrer'
          >
            <p className='home-button-text'>Build Credit with "Kickoff"</p>
          </a>
          <a
            className='home-button'
            href='https://meetava.app.link/TrxLfA7l1Jb'
            target='_blank'
            rel='noopener noreferrer'
          >
            <p className='home-button-text'>Build Credit with "Ava"</p>
          </a>
          <a
            className='home-button'
            href='https://creditstrong.referralrock.com/l/3LUIS433/ '
            target='_blank'
            rel='noopener noreferrer'
          >
            <p className='home-button-text'>
              Build Credit with "Credit Strong"
            </p>
          </a>
        </section>
      </div>
    </>
  );
};

export default Home;
