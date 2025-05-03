import React, { useState } from 'react'
import SubstituteRegister from './substitute-register'
import SubstituteLogin from './substitute-login'
import { useNavigate } from "react-router-dom"
import registerVideo from '../public/vikarie-register-video.mp4'


function SubstituteAccountHandle({ onSubstituteLogin, onSubstituteRegister }) {
  const [showRegisterForm, setShowRegisterForm] = useState(true)
 
  const navigate = useNavigate()
 
  const handleSubstituteLogin = () => {
    onSubstituteLogin(true) // Update the isLoggedIn state to true
    navigate("/substituteProfile-page") // Navigate to the profile page
  }

  const handleSubstituteRegister = (message) => {
    console.log('Registration successful, navigating now...', message);
    localStorage.setItem('registrationSuccessMessage', message || 'Användaren skapades! Logga in med dina uppgifter.');
    
    // Add a small delay to ensure state is properly updated
    setTimeout(() => {
      navigate('/allAccount-login');
    }, 100);
  }

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
                <div className="login-distence">
                  <SubstituteRegister onSubstituteRegister={handleSubstituteRegister}/>
                </div>
                <p>Har du redan ett konto? Klicka login </p>
                <button onClick={() => setShowRegisterForm(false)} type="button" >Login</button>
              </div>
            </>
          ) : (
            <>
             <div className="alert-container">
              <div className="login-distence">
                <SubstituteLogin onSubstituteLogin={handleSubstituteLogin}/>
              </div>
                <p>Kom tillbaka till registreringssidan:</p>
                <button onClick={() => setShowRegisterForm(true)} type="button" >Registrera</button>
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
