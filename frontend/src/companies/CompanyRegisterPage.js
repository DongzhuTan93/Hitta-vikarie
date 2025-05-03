import React from 'react';
import CompanyRegister from './company-register';
import companyVideo from '../public/company-register-video.mp4';

function CompanyRegisterPage({ onCompanyRegister }) {
  return (
    <div className="video-container">
      <video autoPlay loop muted>
        <source src={companyVideo} type="video/mp4" />
      </video>
      <div className='page-container-holder'>
        <div className="page-container">
          <div className="substitute-container">
            <div className="alert-container">
              <div className="login-distence">
                <CompanyRegister onCompanyRegister={onCompanyRegister} />
              </div>
              <p>Har du redan ett konto? Klicka login </p>
              <a href="/company-login">
                <button type="button">Login</button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CompanyRegisterPage; 