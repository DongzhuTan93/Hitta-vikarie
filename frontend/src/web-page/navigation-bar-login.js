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
    navigate("/companyProfile-page") // Navigate to the profile page
  };

  const handleSubstituteLogin = () => {
    onSubstituteLogin(true)
    navigate("/substituteProfile-page")
  };

  return (
    <div className="page-container-holder">
      <div className="page-container">
        <div className="substitute-container">
          <div className="alert-container">
            {successMessage && (
              <Alert variant="success" className="mb-3">{successMessage}</Alert>
            )}
            <div className="login-distence">
              <SubstituteLogin onSubstituteLogin={handleSubstituteLogin} />
            </div>
            <p>-------------------------------</p>
            <CompanyLogin onCompanyLogin={handleCompanyLogin} />
          </div>
        </div>
      </div>
    </div>
  )
}

export default AccountLogin
