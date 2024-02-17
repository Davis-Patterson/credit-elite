import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';

const Auth = ({ setToken }) => {
  const [form, setForm] = useState({
    username: '',
    password: '',
  });
  const [error, setError] = useState(null);
  const [errorTimeoutId, setErrorTimeoutId] = useState(null);
  const [buttonActive, setButtonActive] = useState(false);

  const navigate = useNavigate();

  const handleChange = (e) => {
    setForm((prev) => ({
      ...form,
      [e.target.name]: e.target.value,
    }));
  };

  const clearError = () => {
    setError(null);
    if (errorTimeoutId) {
      clearTimeout(errorTimeoutId);
      setErrorTimeoutId(null);
    }
  };

  useEffect(() => {
    const isFormEmpty = !form.username.trim() || !form.password.trim();
    setButtonActive(!isFormEmpty);
  }, [form.username, form.password]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const authURL =
      'https://credit-elite-backend-0eb2f609fa81.herokuapp.com/api/admin/login';

    clearError();

    try {
      const response = await axios.post(authURL, {
        username: form.username,
        password: form.password,
      });

      setToken(response.data.token);
      console.log('login successful: ', response.data);
      setError(null);

      navigate('/admin');
    } catch (error) {
      console.error(
        'Login error: ',
        error.response ? error.response.data : error.message
      );
      setError(
        error.response ? error.response.data : 'An error occurred during login.'
      );

      const id = setTimeout(() => {
        setError(null);
      }, 3000);

      setErrorTimeoutId(id);
    }
  };

  return (
    <>
      <div className='page-container'>
        <div className='contact-container'>
          <h1 className='title-auth'>AUTHORIZATION</h1>
          <hr className='contact-page-break' />
          <div className='contact-content' id='contact-content'>
            <form onSubmit={handleSubmit} className='contact-form'>
              <p className='auth-sub-title'>
                Please validate your credentials:
              </p>
              <input
                type='text'
                name='username'
                placeholder='Username'
                value={form.username}
                onChange={handleChange}
                required
                className='username-input'
              />
              <input
                type='password'
                name='password'
                placeholder='Password'
                value={form.password}
                onChange={handleChange}
                required
                className='password-input'
              />
              {error && <div className='auth-error'>{error}</div>}
              <button
                type='submit'
                className={buttonActive ? 'submit-button' : 'inactive'}
                disabled={!buttonActive}
              >
                Login
              </button>
            </form>
            <div className='auth-words-link-container'>
              <div className='auth-link-words'>Click here to </div>
              <Link to='/home' className='auth-words-link'>
                <p className='auth-words-link-button'> return home</p>
              </Link>
              <div className='auth-link-words'>.</div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Auth;
