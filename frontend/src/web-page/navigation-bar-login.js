import React, { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"
import CompanyLogin from "../companies/company-login"
import SubstituteLogin from "../substitute/substitute-login"
import Alert from 'react-bootstrap/Alert'

function AccountLogin({ onCompanyLogin, onSubstituteLogin }) {
  const navigate = useNavigate()
  const [successMessage, setSuccessMessage] = useState('');

  useEffect(() => {
    // Hämta meddelandet från localStorage när komponenten laddas
    const message = localStorage.getItem('registrationSuccessMessage');
    if (message) {
      setSuccessMessage(message);
      // Ta bort meddelandet från localStorage så att det inte visas igen vid refresh
      localStorage.removeItem('registrationSuccessMessage');
    }
  }, []);

  const handleCompanyLogin = () => {
    onCompanyLogin(true) // Update the isLoggedIn state to true
    navigate("/companyProfile") // Navigate to the profile page
  };

  const handleSubstituteLogin = () => {
    onSubstituteLogin(true)
    navigate("/substituteProfile")
  };

  return (
    <div className="contact-page-container">
      <div className="contact-card">
        <div className="contact-info">
          <h2 className="contact-title">Vikarie-inloggning</h2>
          <div className="login-distence">
            <SubstituteLogin onSubstituteLogin={handleSubstituteLogin} />
          </div>
        </div>
        <div className="contact-form-container">
          <h2 className="contact-title">Företags-inloggning</h2>
          <div className="login-form-wrapper">
            <CompanyLogin onCompanyLogin={handleCompanyLogin} />
          </div>
        </div>
      </div>
    </div>
  )
}

export default AccountLogin
