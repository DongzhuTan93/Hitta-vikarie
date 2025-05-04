import React, { useState } from 'react'
import SubstituteRegister from './substitute-register'
import SubstituteLogin from './substitute-login'
import { useNavigate } from "react-router-dom"
import registerVideo from '../public/vikarie-register-video.mp4'
import Alert from 'react-bootstrap/Alert'

function SubstituteAccountHandle({ onSubstituteLogin, onSubstituteRegister }) {
  const [showRegisterForm, setShowRegisterForm] = useState(true)
  const [registrationMessage, setRegistrationMessage] = useState("");
  const [registrationStatus, setRegistrationStatus] = useState(null);
  const [registeredUsername, setRegisteredUsername] = useState("");
 
  const navigate = useNavigate()
 
  const handleSubstituteLogin = () => {
    onSubstituteLogin(true) // Update the isLoggedIn state to true
    navigate("/substituteProfile") // Navigate to the profile page
  }

  const handleSubstituteRegister = (message, status, username) => {
    console.log('Registration successful, showing login form...');
    setRegistrationMessage(message);
    setRegistrationStatus(status);
    setRegisteredUsername(username); // Store the username
    setShowRegisterForm(false); // Switch to login form
    onSubstituteRegister(true)
  }

  const handleEnterKeyLogin = (event) => {
    if (event.key === 'Enter') {
      handleSubstituteLogin();
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
        <source src={registerVideo} type="video/mp4" />
      </video>
      <div className='page-container-holder'>
        <div className="page-container">
          <div className="substitute-container">
            {showRegisterForm ? (
              <>
                <div className="alert-container">
                  <div className="login-distance">
                    <SubstituteRegister onSubstituteRegister={handleSubstituteRegister} onEnterKey={handleEnterKeyRegister}/>
                  </div>
                  <p className="login-text">Har du redan ett konto? <a href="#" onClick={(e) => {e.preventDefault(); setShowRegisterForm(false)}} className="login-link">Logga in här</a></p>
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
                  <SubstituteLogin 
                    onSubstituteLogin={handleSubstituteLogin} 
                    onEnterKey={handleEnterKeyLogin}
                    prefillUsername={registeredUsername}
                  />
                </div>
                  <p>Kom tillbaka till registreringssidan: <a href="#" onClick={(e) => {e.preventDefault(); setShowRegisterForm(true); setRegistrationMessage("");}} className="login-link">Registrera</a></p>
                </div>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}

export default SubstituteAccountHandle
