import React, { useState, useEffect } from 'react';
import useLocalStorageState from 'use-local-storage-state';
import emailjs from 'emailjs-com';
import axios from 'axios';

const Admin = ({}) => {
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
          <h1 className='title'>ADMIN</h1>
          <hr className='contact-page-break' />
          <div className='schedule-content' id='contact-content'>
            <p className='schedule-subtitle'>Add available appointments:</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Admin;
