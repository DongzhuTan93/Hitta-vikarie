import React, { useEffect, useState } from 'react';
import CompanyLogin from './company-login';
import companyImage from '../public/company-register.jpg';
import Alert from 'react-bootstrap/Alert';

function CompanyLoginPage({ onCompanyLogin }) {
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
      <img src={companyImage} alt="Company register background" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
      <div className='page-container-holder'>
        <div className="page-container">
          <div className="substitute-container">
            <div className="alert-container">
              {successMessage && (
                <Alert variant="success" className="mb-3">{successMessage}</Alert>
              )}
              <div className="login-distence">
                <CompanyLogin onCompanyLogin={onCompanyLogin} />
              </div>
              <p>Har du inget konto? Klicka registrera </p>
              <a href="/company-register">
                <button type="button">Registrera</button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CompanyLoginPage; 