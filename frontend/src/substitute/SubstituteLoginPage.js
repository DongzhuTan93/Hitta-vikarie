import React, { useEffect, useState } from 'react';
import SubstituteLogin from './substitute-login';
import registerVideo from '../public/vikarie-register-video.mp4';
import Alert from 'react-bootstrap/Alert';

function SubstituteLoginPage({ onSubstituteLogin }) {
  const [successMessage, setSuccessMessage] = useState('');

  useEffect(() => {
    // Get message from localStorage when component loads
    const message = localStorage.getItem('registrationSuccessMessage');
    if (message) {
      setSuccessMessage(message);
      // Remove message from localStorage so it's not shown again on refresh
      localStorage.removeItem('registrationSuccessMessage');
    }
  }, []);

  return (
    <div className="video-container">
      <video autoPlay loop muted>
        <source src={registerVideo} type="video/mp4" />
      </video>
      <div className='page-container-holder'>
        <div className="page-container">
          <div className="substitute-container">
            <div className="alert-container">
              {successMessage && (
                <Alert variant="success" className="mb-3">{successMessage}</Alert>
              )}
              <div className="login-distence">
                <SubstituteLogin onSubstituteLogin={onSubstituteLogin} />
              </div>
              <p>Har du inget konto? Klicka registrera </p>
              <a href="/substitute-register">
                <button type="button">Registrera</button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SubstituteLoginPage; 