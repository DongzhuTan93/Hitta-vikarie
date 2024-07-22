import React, { useState } from 'react';
import CompanyLogin from './company-login';
import CompanyRegister from './company-register';
import { useNavigate } from 'react-router-dom';
import companyVideo from '../public/company-register-video.mp4'; // Adjust the path as needed

function CompanyAccountHandle({ onCompanyLogin, onCompanyRegister }) {
  const [showInputForm, setShowInputForm] = useState(true);
  const navigate = useNavigate();

  const handleCompanyLogin = () => {
    onCompanyLogin(true);
    navigate('/companyProfile-page');
  };

  const handleCompanyRegister = () => {
    console.log('Registration successful, navigating now...');
    onCompanyRegister(true);
    navigate('/allAccount-login');
  };

  const handleEnterKeyLogin = (event) => {
    if (event.key === 'Enter') {
      handleCompanyLogin();
    }
  };

  const handleEnterKeyRegister = (event) => {
    if (event.key === 'Enter') {
      handleCompanyRegister();
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
                  <p>Har du redan ett konto? Klicka login </p>
                  <button onClick={() => setShowInputForm(false)} type="button" >Login</button>
                </div>
              </>
            ) : (
              <>
                <div className="alert-container">
                  <div className="login-distance">
                    <CompanyLogin onCompanyLogin={handleCompanyLogin} onEnterKey={handleEnterKeyLogin} />
                  </div>
                  <p>Kom tillbaka till registreringssidan:</p>
                  <button onClick={() => setShowInputForm(true)} type="button" >Register</button>
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
