import React, { useState } from 'react'
import SubstituteRegister from './substitute-register'
import SubstituteLogin from './substitute-login'
import { useNavigate } from "react-router-dom"


function SubstituteAccountHandle({ onSubstituteLogin, onSubstituteRegister }) {
  const [showRegisterForm, setShowRegisterForm] = useState(true)
 
  const navigate = useNavigate()
 
  const handleSubstituteLogin = () => {
    onSubstituteLogin(true) // Update the isLoggedIn state to true
    navigate("/substituteProfile-page") // Navigate to the profile page
  }

  const handleSubstituteRegister = () => {
    onSubstituteRegister(true)
    navigate("/allAccount-login")
  }

  return (
    <div className='page-container-holder'>
      <div className="page-container">
        <div className="substitute-container">
          {showRegisterForm ? (
            <>
              <div className="alert-container">
                <div className="login-distence">
                  <SubstituteRegister onSubstituteRegister={handleSubstituteRegister}/>
                </div>
                  <p>Har du redan ett konto? Logga in här:</p>
                  <button onClick={() => setShowRegisterForm(false)}  type="button" className="btn btn-outline-danger">Login</button>
              </div>
            </>
          ) : (
            <>
             <div className="alert-container">
              <div className="login-distence">
                <SubstituteLogin onSubstituteLogin={handleSubstituteLogin}/>
              </div>
                <p>Kom tillbaka till registreringssidan:</p>
                <button onClick={() => setShowRegisterForm(true)} type="button" className="btn btn-outline-danger">Registrera</button>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  )
}

export default SubstituteAccountHandle
