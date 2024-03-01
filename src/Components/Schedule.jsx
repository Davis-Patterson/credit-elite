import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import emailjs from 'emailjs-com';

const Schedule = () => {
  const [appointments, setAppointments] = useState([]);
  const [selectedDay, setSelectedDay] = useState(null);
  const [selectedTime, setSelectedTime] = useState(false);
  const [appointmentID, setAppointmentID] = useState('');

  const [form, setForm] = useState({
    first_name: '',
    last_name: '',
    email: '',
  });
  const [sending, setSending] = useState(false);
  const [error, setError] = useState(false);

  const [message, setMessage] = useState('');

  const [buttonActive, setButtonActive] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  useEffect(() => {
    const isFormEmpty = !form.first_name.trim() || !form.email.trim();
    setButtonActive(!isFormEmpty);
  }, [form.first_name, form.email]);

  const fetchAppointments = async () => {
    const apptURL =
      'https://credit-elite-backend-0eb2f609fa81.herokuapp.com/api/appointments';
    try {
      const response = await axios.get(apptURL);
      const currentTime = new Date();
      const availableAppointments = response.data.filter((appointment) => {
        const apptDate = new Date(appointment.date);
        return apptDate >= currentTime && appointment.available;
      });
      setAppointments(availableAppointments);
    } catch (error) {
      console.error('Failed to fetch appointments:', error);
    }
  };

  useEffect(() => {
    fetchAppointments();
  }, []);

  const findAppointmentsForDay = ({ date, view }) => {
    if (view === 'month') {
      const isSelectedDay =
        selectedDay && date.toDateString() === selectedDay.toDateString();
      const hasAppointments = appointments.some((appointment) => {
        const apptDate = new Date(appointment.date);
        return apptDate.toDateString() === date.toDateString();
      });

      if (isSelectedDay) {
        return hasAppointments ? 'highlight selected-day' : 'selected-day';
      } else {
        return hasAppointments ? 'highlight' : null;
      }
    }
  };

  const getAppointmentsForSelectedDay = () => {
    if (!selectedDay) return null;

    const dailyAppointments = appointments.filter((appointment) => {
      const apptDate = new Date(appointment.date);
      return apptDate.toDateString() === selectedDay.toDateString();
    });

    if (dailyAppointments.length === 0) {
      return <p className='sched-message'>No appointments available.</p>;
    }

    return dailyAppointments.map((appointment, index) => (
      <div
        key={index}
        className={`appointment-box ${
          appointment._id === appointmentID ? 'selected' : ''
        }`}
        onClick={() => handleAppointmentClick(appointment._id)}
      >
        <div>{appointment.timeSlot}</div>
      </div>
    ));
  };

  const handleAppointmentClick = (apptID) => {
    console.log('Claiming appointment with ID:', apptID);
    setAppointmentID(apptID);
    setSelectedTime(true);
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();

    if (!appointmentID) {
      console.error('No appointment ID selected for claiming');
      return;
    }

    setSending(true);
    try {
      await handleAppointmentClaim(appointmentID);
    } catch (error) {
      console.error(error);
    }
  };

  const sendStaffEmail = (appointmentDetails) => {
    const emailParams = {
      client_name: appointmentDetails.clientName,
      appt_date: appointmentDetails.date,
      time_slot: appointmentDetails.timeSlot,
      message: 'A new appointment has been booked.',
    };

    emailjs
      .send(
        'service_smocg5d',
        'template_w3q0bnt',
        emailParams,
        'xISZ-lko86_-yCSNI'
      )
      .then(
        (result) => {
          console.log('Email notification sent!', result.text);
        },
        (error) => {
          console.error('Failed to send email notification:', error.text);
        }
      );
  };

  const handleAppointmentClaim = async (appointmentId) => {
    const claimURL = `https://credit-elite-backend-0eb2f609fa81.herokuapp.com/api/appointments/claim/${appointmentId}`;
    const constructedName = `${form.first_name} ${form.last_name}`;
    try {
      const response = await axios.patch(claimURL, {
        clientName: constructedName,
        clientEmail: form.email,
      });

      console.log('Appointment successfully claimed:', response.data);
      setSending(false);
      setError(false);
      setMessage('Appointment successfully booked.');

      if (response.data) {
        const appointmentDetails = appointments.find(
          (appointment) => appointment._id === appointmentId
        );
        if (appointmentDetails) {
          const emailInfo = {
            clientName: constructedName,
            clientEmail: form.email,
            date: new Date(appointmentDetails.date).toLocaleDateString(),
            timeSlot: appointmentDetails.timeSlot,
          };
          sendStaffEmail(emailInfo);
        }
      }

      setForm({ first_name: '', last_name: '', email: '' });
      setSelectedTime(false);
      setAppointmentID('');
      fetchAppointments();
    } catch (error) {
      console.error(
        'Failed to claim appointment:',
        error.response?.data || error.message
      );
      setSending(false);
      setError(true);
      setTimeout(() => {
        setError(false);
      }, 3000);
      // Update UI to show error
    }
  };

  const handleDayClick = (value, event) => {
    setSelectedDay(value);
    setSelectedTime(false);
    setAppointmentID('');
  };

  return (
    <div className='page-container'>
      <div className='schedule-container'>
        <h1 className='title'>CALENDAR</h1>
        <hr className='contact-page-break' />
        <div className='schedule-content' id='contact-content'>
          <p className='schedule-subtitle'>
            Schedule an appointment for a consultation:
          </p>
          <Calendar
            onChange={setSelectedDay}
            value={selectedDay}
            onClickDay={handleDayClick}
            tileClassName={findAppointmentsForDay}
            className='react-calendar'
          />
        </div>
        <div className='daily-appointments'>
          {getAppointmentsForSelectedDay()}
        </div>
        {selectedTime && (
          <form onSubmit={handleFormSubmit} className='appointment-form'>
            <p className='sched-form-title'>Provide your information:</p>
            <div className='first-last-container'>
              <input
                type='text'
                name='first_name'
                placeholder='First Name'
                value={form.first_name}
                onChange={handleChange}
                required
                className='sched-name-input'
              />
              <input
                type='text'
                name='last_name'
                placeholder='Last Name'
                value={form.last_name}
                onChange={handleChange}
                className='sched-name-input'
              />
            </div>
            <input
              name='email'
              type='email'
              placeholder='Your Email'
              value={form.email}
              onChange={handleChange}
              required
              className='sched-email-input'
            ></input>
            {sending && <p className='sending'>Sending your email</p>}
            {error && (
              <p className='sched-error'>
                There was an error booking your appointment.
              </p>
            )}
            <button
              type='submit'
              className={buttonActive ? 'submit-button' : 'inactive'}
              disabled={!buttonActive}
            >
              Submit
            </button>
          </form>
        )}
      </div>
    </div>
  );
};

export default Schedule;
