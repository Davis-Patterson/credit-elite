import React, { useState } from 'react';
import emailjs from 'emailjs-com';

const Appointments = ({}) => {
  return (
    <>
      <div className='page-container'>
        <div className='schedule-container'>
          <h1 className='title'>CALENDAR</h1>
          <hr className='contact-page-break' />
          <div className='schedule-content' id='contact-content'>
            <p className='schedule-subtitle'>
              Schedule an appointment for a consultation:
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Appointments;
