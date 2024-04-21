import React from 'react';
import { Link } from 'react-router-dom';
import RRLogoBlack from '/src/assets/RR-logo-black.png';
import RRLogoWhite from '/src/assets/RR-logo-white.png';

const About = ({ darkMode }) => {
  const currentLogo = darkMode ? RRLogoWhite : RRLogoBlack;

  return (
    <>
      <div className='page-container'>
        <div className='contact-container'>
          <div className='about-container'>
            <section className='about-section'>
              <img
                className='RR-Logo'
                src={currentLogo}
                alt='Credit Elite logo'
              />
              <p className='LV-title'>by LUIS PEGUERO</p>
              <hr className='contact-page-break' />
              <div className='desc-container'>
                <p className='about-subtitle'>
                  Adverse credit reports can significantly impede your ability
                  to secure a mortgage, automobile financing, credit cards,
                  residential leases, or even employment opportunities. The
                  sensible strategies in Credit Repair help you take control of
                  your finances, clean up your credit report and build your
                  credit.
                </p>
                <p className='about-subtitle'>
                  At <strong>Robyn Robyn's</strong>, we engage in negotiations
                  with creditors to rectify inaccuracies on your credit report
                  and eliminate outdated information. Furthermore, we provide
                  guidance on adopting effective strategies for credit building
                  and securing both personal and business financing.
                </p>
              </div>
              <section className='link-section'>
                <Link to='/contact' className='about-button' ID='about-button'>
                  <p className='home-button-text'>CONTACT</p>
                </Link>
                <Link to='/schedule' className='about-button' ID='about-button'>
                  <p className='home-button-text'>SCHEDULE</p>
                </Link>
              </section>
            </section>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
