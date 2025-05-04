import React from 'react';
import { useNavigate } from 'react-router-dom';
import SubstituteLogin from '../substitute/substitute-login';
import CompanyLogin from '../companies/company-login';

function AllAccountLogin({ onCompanyLogin, onSubstituteLogin }) {
  const navigate = useNavigate();

  const handleCompanyLogin = () => {
    onCompanyLogin(true);
    navigate('/companyProfile');
  };

  const handleSubstituteLogin = () => {
    onSubstituteLogin(true);
    navigate('/substituteProfile');
  };

  return (
    <div className="login-page-container">
      <div className="login-card">
        <div className="login-section">
          <h2>Vikarie</h2>
          <div className="login-form">
            <SubstituteLogin onSubstituteLogin={handleSubstituteLogin} />
          </div>
          <div className="login-footer">
            <p>Har du inget konto? <a href="/substituteAccount">Registrera dig här</a></p>
          </div>
        </div>
        
        <div className="login-divider">eller</div>
        
        <div className="login-section">
          <h2>Företag</h2>
          <div className="login-form">
            <CompanyLogin onCompanyLogin={handleCompanyLogin} />
          </div>
          <div className="login-footer">
            <p>Har du inget konto? <a href="/companyAccount">Registrera dig här</a></p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AllAccountLogin; 