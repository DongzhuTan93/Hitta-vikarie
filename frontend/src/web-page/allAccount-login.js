import React from 'react';
import { useNavigate } from 'react-router-dom';

function AllAccountLogin({ onCompanyLogin, onSubstituteLogin }) {
  const navigate = useNavigate();

  const handleCompanyLogin = (event) => {
    event.preventDefault();
    // Add your company login logic here
    onCompanyLogin(true);
    navigate('/companyProfile-page');
  };

  const handleSubstituteLogin = (event) => {
    event.preventDefault();
    // Add your substitute login logic here
    onSubstituteLogin(true);
    navigate('/substituteProfile-page');
  };

  return (
    <div className="login-page-container">
      <div className="login-card">
        <div className="login-section">
          <h2>Vikarie logga in här:</h2>
          <form className="login-form" onSubmit={handleSubstituteLogin}>
            <input 
              type="text" 
              className="login-input" 
              placeholder="Användarnamn" 
              required 
            />
            <input 
              type="password" 
              className="login-input" 
              placeholder="Lösenord minst 10 tecken" 
              required 
            />
            <button type="submit" className="login-button">Login</button>
          </form>
          <div className="login-footer">
            <p>Har du inget konto? <a href="/substituteAccount-handle">Registrera dig här</a></p>
          </div>
        </div>
        
        <div className="login-divider">eller</div>
        
        <div className="login-section">
          <h2>Företaget logga in här:</h2>
          <form className="login-form" onSubmit={handleCompanyLogin}>
            <input 
              type="text" 
              className="login-input" 
              placeholder="Användarnamn" 
              required 
            />
            <input 
              type="password" 
              className="login-input" 
              placeholder="Lösenord minst 10 tecken" 
              required 
            />
            <button type="submit" className="login-button">Login</button>
          </form>
          <div className="login-footer">
            <p>Har du inget konto? <a href="/companyAccount-handle">Registrera dig här</a></p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AllAccountLogin; 