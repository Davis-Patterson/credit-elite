import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import emailjs from 'emailjs-com';

const Contact = ({}) => {
  const [form, setForm] = useState({
    user_name: '',
    user_email: '',
    message: '',
  });
  const [sending, setSending] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(false);

  const [buttonActive, setButtonActive] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  useEffect(() => {
    const isFormEmpty =
      !form.user_name.trim() || !form.user_email.trim() || !form.message.trim();
    setButtonActive(!isFormEmpty);
  }, [form.user_name, form.user_email, form.message]);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSending(true);
    emailjs
      .sendForm(
        'service_smocg5d',
        'template_xiaw36p',
        e.target,
        'xISZ-lko86_-yCSNI'
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
        <div className='contact-container'>
          <h1 className='title'>CONTACT</h1>
          <hr className='contact-page-break' />
          <div className='contact-content' id='contact-content'>
            <form onSubmit={handleSubmit} className='contact-form'>
              <p className='email-form-title'>Send us an email:</p>
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
              {error && (
                <p className='contact-error'>
                  There was an error sending your email.
                </p>
              )}
              <button
                type='submit'
                className={buttonActive ? 'submit-button' : 'inactive'}
                disabled={!buttonActive}
              >
                Send Email
              </button>
            </form>
            <div className='contact-words-link-container'>
              <div className='contact-link-words'>Click here to </div>
              <Link to='/schedule' className='contact-words-link'>
                <p className='contact-words-link-button'>
                  {' '}
                  schedule a consultation
                </p>
              </Link>
              <div className='contact-link-words'>.</div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
