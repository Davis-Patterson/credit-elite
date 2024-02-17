import React, { useState, useEffect } from 'react';
import emailjs from 'emailjs-com';
import axios from 'axios';

const Schedule = ({}) => {
  const [appointments, setAppointments] = useState([]);

  useEffect(() => {
    const apptURL = 'http://localhost:3001/api/appointments';

    const fetchAppointments = async () => {
      try {
        const response = await axios.get(apptURL);
        setAppointments(response.data);
      } catch (error) {
        console.error('Failed to fetch appointments:', error);
      }
    };

    fetchAppointments();
    console.log(appointments);
  }, []);

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

export default Schedule;
