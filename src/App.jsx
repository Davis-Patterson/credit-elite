import { useState, useEffect } from 'react';
import { Route, Routes, Navigate } from 'react-router-dom';
import useLocalStorageState from 'use-local-storage-state';
import Nav from './Components/Nav';
import Home from './Components/Home';
import About from './Components/About';
import Contact from './Components/Contact';
import Schedule from './Components/Schedule';
import Admin from './Components/Admin';
import Auth from './Components/Auth';
import Footer from './Components/Footer';
import './App.css';
import { dark } from '@mui/material/styles/createPalette';

function App() {
  const [darkMode, setDarkMode] = useLocalStorageState('darkMode', true);
  const [token, setToken] = useLocalStorageState('userToken', '');

  const ProtectedRoute = ({ children, token }) => {
    if (!token) {
      return <Navigate to='/authorize' replace />;
    }

    return children;
  };

  useEffect(() => {
    const storedDarkMode = localStorage.getItem('darkMode');
    if (storedDarkMode === null) {
      setDarkMode(true);
      localStorage.setItem('darkMode', 'true');
    }
  }, [setDarkMode]);

  return (
    <>
      <div className='app-container'>
        <Nav darkMode={darkMode} setDarkMode={setDarkMode} />
        <div className='content-wrap'>
          <Routes>
            <Route path='/' element={<Navigate to='/home' replace />} />
            <Route path='/home' element={<Home darkMode={darkMode} />} />
            <Route path='/about' element={<About darkMode={darkMode} />} />
            <Route path='/contact' element={<Contact darkMode={darkMode} />} />
            <Route path='/schedule' element={<Schedule />} />
            <Route
              path='/admin'
              element={
                <ProtectedRoute token={token}>
                  <Admin />
                </ProtectedRoute>
              }
            />
            <Route path='/authorize' element={<Auth setToken={setToken} />} />
          </Routes>
        </div>
        <Footer token={token} setToken={setToken} />
      </div>
    </>
  );
}

export default App;
