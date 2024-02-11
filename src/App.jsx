import { useState, useEffect } from 'react';
import { Route, Routes, Navigate } from 'react-router-dom';
import useLocalStorageState from 'use-local-storage-state';
import Nav from './Components/Nav';
import Home from './Components/Home';
import Contact from './Components/Contact';
import Footer from './Components/Footer';
import './App.css';
import { dark } from '@mui/material/styles/createPalette';

function App() {
  const [darkMode, setDarkMode] = useLocalStorageState('darkMode', true);

  useEffect(() => {
    const storedDarkMode = localStorage.getItem('darkMode');
    if (storedDarkMode === null) {
      setDarkMode(true);
      localStorage.setItem('darkMode', 'true');
    }
  }, [setDarkMode]);

  return (
    <>
      <Nav darkMode={darkMode} setDarkMode={setDarkMode} />
      <Routes>
        <Route path='/' element={<Navigate to='/home' replace />} />
        <Route path='/home' element={<Home darkMode={darkMode} />} />
        <Route path='/contact' element={<Contact />} />
      </Routes>
      <Footer darkMode={darkMode} setDarkMode={setDarkMode} />
    </>
  );
}

export default App;
