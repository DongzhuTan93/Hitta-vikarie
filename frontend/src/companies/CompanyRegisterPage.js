import React from 'react';
import CompanyRegister from './company-register';
import companyImage from '../public/company-register.jpg';

function CompanyRegisterPage({ onCompanyRegister }) {
  return (
    <div className="video-container">
      <img src={companyImage} alt="Company register background" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
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