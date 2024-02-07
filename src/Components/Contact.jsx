import React, { useState } from 'react';
import emailjs from 'emailjs-com';

const Contact = ({ activeSection, darkMode }) => {
  const [form, setForm] = useState({
    user_name: '',
    user_email: '',
    message: '',
  });
  const [sending, setSending] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSending(true);
    emailjs
      .sendForm(
        'service_cbk0eww',
        'template_cz31eqp',
        e.target,
        'yBjEhIJRk4yxfyCnY'
      )
      .then(
        (result) => {
          setSending(false);
          setSuccess(true);
          console.log('Email successfully sent!', result.text);
          setTimeout(() => {
            setSuccess(false);
          }, 5000);
          setForm({
            user_name: '',
            user_email: '',
            message: '',
          });
        },
        (error) => {
          setSending(false);
          setError(true);
          console.log('Failed to send email:', error.text);
          setTimeout(() => {
            setError(false);
          }, 5000);
        }
      );
  };

  return (
    <>
      <div className='page-container'>
        <h1 className='title'>Contact Me</h1>
        <hr className='contact-page-break' />
        <div className='contact-content' id='contact-content'>
          <form onSubmit={handleSubmit} className='contact-form'>
            <p className='email-form-title'>Send me an email:</p>
            <input
              type='text'
              name='user_name'
              placeholder='Your Name'
              value={form.user_name}
              onChange={handleChange}
              required
              className='name-input'
            />
            <input
              type='email'
              name='user_email'
              placeholder='Your Email'
              value={form.user_email}
              onChange={handleChange}
              required
              className='email-input'
            />
            <textarea
              name='message'
              placeholder='Your Message'
              value={form.message}
              onChange={handleChange}
              required
              className='message-input'
            ></textarea>
            {sending && <p className='sending'>Sending your email</p>}
            {/* {error && (
              <p className='error'>There was an error sending your email</p>
              )}
              {success && (
                <p className='success'>Your Email was successfully sent!</p>
              )} */}
            <button type='submit' className='submit-button'>
              Send Email
            </button>
          </form>
        </div>
        {/* <div className='gap' /> */}
      </div>
    </>
  );
};

export default Contact;
