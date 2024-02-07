import { useState } from 'react';
import { Route, Routes, Navigate } from 'react-router-dom';
import useLocalStorageState from 'use-local-storage-state';
import Nav from './Components/Nav';
import Home from './Components/Home';
import Contact from './Components/Contact';
import './App.css';

function App() {
  const [darkMode, setDarkMode] = useLocalStorageState('darkMode', false);

  return (
    <>
      <Nav darkMode={darkMode} setDarkMode={setDarkMode} />
      <Routes>
        <Route path='/' element={<Navigate to='/home' replace />} />
        <Route path='/home' element={<Home />} />
        <Route path='/contact' element={<Contact />} />
      </Routes>
    </>
  );
}

export default App;
