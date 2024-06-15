import React, { useContext, useEffect } from 'react';
import { AppContext } from 'contexts/AppContext';
import { Route, Routes, Navigate } from 'react-router-dom';
import Nav from 'components/Nav';
import Home from 'components/Home';
import About from 'components/About';
import Contact from 'components/Contact';
import Schedule from 'components/Schedule';
import Admin from 'components/Admin';
import Auth from 'components/Auth';
import Footer from 'components/Footer';
import 'styles/App.css';

function App() {
  const { setDarkMode, token } = useContext(AppContext);

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
        <Nav />
        <div className='content-wrap'>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/about' element={<About />} />
            <Route path='/contact' element={<Contact />} />
            <Route path='/schedule' element={<Schedule />} />
            <Route
              path='/admin'
              element={
                <ProtectedRoute token={token}>
                  <Admin />
                </ProtectedRoute>
              }
            />
            <Route path='/authorize' element={<Auth />} />
          </Routes>
        </div>
        <Footer />
      </div>
    </>
  );
}

export default App;
