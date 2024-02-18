import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';

const Admin = () => {
  const [appointments, setAppointments] = useState([]);
  const [selectedDay, setSelectedDay] = useState(null);
  const [time, setTime] = useState('');
  const [duration, setDuration] = useState(30);
  const [isButtonActive, setIsButtonActive] = useState(false);

  const fetchAppointments = async () => {
    const apptURL =
      'https://credit-elite-backend-0eb2f609fa81.herokuapp.com/api/appointments';
    try {
      const response = await axios.get(apptURL);
      setAppointments(response.data);
    } catch (error) {
      console.error('Failed to fetch appointments:', error);
    }
  };

  useEffect(() => {
    fetchAppointments();
  }, []);

  useEffect(() => {
    setIsButtonActive(selectedDay && time);
  }, [selectedDay, time]);

  const findAppointmentClassesForDay = ({ date, view }) => {
    if (view === 'month') {
      const dailyAppointments = appointments.filter((appointment) => {
        const apptDate = new Date(appointment.date);
        return apptDate.toDateString() === date.toDateString();
      });

      if (dailyAppointments.length > 0) {
        const isUnavailable = dailyAppointments.some((appt) => !appt.available);
        return isUnavailable ? 'unavailable' : 'available';
      }
    }
    return null;
  };

  const getAdminAppointmentsForSelectedDay = () => {
    if (!selectedDay) return null;

    const dailyAppointments = appointments.filter((appointment) => {
      const apptDate = new Date(appointment.date);
      return apptDate.toDateString() === selectedDay.toDateString();
    });

    if (dailyAppointments.length === 0) {
      return <p className='admin-message'>No appointments for this day.</p>;
    }

    return dailyAppointments.map((appointment, index) => {
      const appointmentStatus = appointment.available ? 'Available' : 'Booked';
      const bookingInfo = appointment.available
        ? appointmentStatus
        : `${appointment.clientName} (${appointment.clientEmail})`;

      return (
        <div
          key={index}
          className={`admin-appointment-box ${
            appointment.available ? 'admin-available' : 'admin-booked'
          }`}
        >
          <div className='appointment-time'>{appointment.timeSlot}</div>
          <div className='appointment-status'>{bookingInfo}</div>
        </div>
      );
    });
  };

  const handleDayClick = (value, event) => {
    setSelectedDay(value);
  };

  const handleTimeChange = (event) => {
    setTime(event.target.value);
  };

  const handleDurationChange = (event) => {
    setDuration(event.target.value);
  };

  const addAvailability = async () => {
    if (!selectedDay || !time) {
      console.error('Please select a day and enter a time.');
      return;
    }

    const [hours, minutes] = time.split(':').map(Number);

    let startTime = new Date(
      selectedDay.getFullYear(),
      selectedDay.getMonth(),
      selectedDay.getDate(),
      hours,
      minutes
    );
    let endTime = new Date(startTime.getTime() + duration * 60000);

    const formatTime = (date) => {
      return date.toLocaleTimeString('en-US', {
        hour: 'numeric',
        minute: '2-digit',
        hour12: true,
      });
    };

    const timeSlot = `${formatTime(startTime)} - ${formatTime(endTime)}`;

    const postURL =
      'https://credit-elite-backend-0eb2f609fa81.herokuapp.com/api/appointments';
    try {
      const response = await axios.post(postURL, {
        date: startTime.toISOString(),
        timeSlot: timeSlot,
      });
      console.log('Availability added:', response.data);
      fetchAppointments();
    } catch (error) {
      console.error('Failed to add availability:', error);
    }
  };

  return (
    <div className='page-container'>
      <div className='schedule-container'>
        <h1 className='title'>ADMIN</h1>
        <hr className='contact-page-break' />
        <div className='schedule-content' id='contact-content'>
          <p className='schedule-subtitle'>Add available appointments:</p>
          <Calendar
            onChange={handleDayClick}
            value={selectedDay}
            tileClassName={findAppointmentClassesForDay}
            className='react-calendar'
          />
        </div>
        <div className='time-input-container'>
          <div className='time-container'>
            <label htmlFor='time' className='time-label'>
              Time:
            </label>
            <input
              type='time'
              value={time}
              onChange={handleTimeChange}
              className='time-input'
            />
          </div>
          <div className='duration-container'>
            <label htmlFor='duration' className='duration-label'>
              Duration:
            </label>
            <input
              type='number'
              value={duration}
              onChange={handleDurationChange}
              min='5'
              max='240'
              className='duration-input'
            />
          </div>
        </div>
        <button
          className={
            isButtonActive ? 'availability-button' : 'availability-inactive'
          }
          disabled={!isButtonActive}
          onClick={addAvailability}
        >
          Add Availability
        </button>
        <div className='daily-appointments'>
          {getAdminAppointmentsForSelectedDay()}
        </div>
      </div>
    </div>
  );
};

export default Admin;
