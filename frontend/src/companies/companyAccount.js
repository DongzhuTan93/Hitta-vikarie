import React, { useState } from 'react';
import CompanyLogin from './company-login';
import CompanyRegister from './company-register';
import { useNavigate } from 'react-router-dom';
import companyVideo from '../public/company-register-video.mp4'; // Adjust the path as needed
import Alert from 'react-bootstrap/Alert';

function CompanyAccountHandle({ onCompanyLogin, onCompanyRegister }) {
  const [showInputForm, setShowInputForm] = useState(true);
  const [registrationMessage, setRegistrationMessage] = useState("");
  const [registrationStatus, setRegistrationStatus] = useState(null);
  const [registeredUsername, setRegisteredUsername] = useState("");
  const navigate = useNavigate();

  const handleCompanyLogin = () => {
    onCompanyLogin(true);
    navigate('/companyProfile');
  };

  const handleCompanyRegister = (message, status, username) => {
    console.log('Registration successful, showing login form...');
    setRegistrationMessage(message);
    setRegistrationStatus(status);
    setRegisteredUsername(username); // Store the username
    setShowInputForm(false); // Switch to login form
    onCompanyRegister(true);
  };

  const handleEnterKeyLogin = (event) => {
    if (event.key === 'Enter') {
      handleCompanyLogin();
    }
  };

  const handleEnterKeyRegister = (event) => {
    if (event.key === 'Enter') {
      // This will be handled by the register component
    }
  };

  return (
    <div className="video-container">
    <video autoPlay loop muted>
      <source src={companyVideo} type="video/mp4" />
    </video>
      <div className="page-container-holder">
        <div className="page-container">
          <div className="substitute-container">
            {showInputForm ? (
              <>
                <div className="alert-container">
                  <div className="login-distance">
                    <CompanyRegister onCompanyRegister={handleCompanyRegister} onEnterKey={handleEnterKeyRegister} />
                  </div>
                  <p className="login-text">Har du redan ett konto? <a href="#" onClick={(e) => {e.preventDefault(); setShowInputForm(false)}} className="login-link">Logga in här</a></p>
                </div>
              </>
            ) : (
              <>
                <div className="alert-container">
                  {registrationMessage && (
                    <Alert variant={registrationStatus ? "success" : "danger"}>
                      {registrationMessage}
                    </Alert>
                  )}
                  <div className="login-distance">
                    <CompanyLogin 
                      onCompanyLogin={handleCompanyLogin} 
                      onEnterKey={handleEnterKeyLogin} 
                      prefillUsername={registeredUsername}
                    />
                  </div>
                  <p>Kom tillbaka till registreringssidan: <a href="#" onClick={(e) => {e.preventDefault(); setShowInputForm(true); setRegistrationMessage("");}} className="login-link">Register</a></p>
                </div>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default CompanyAccountHandle;
