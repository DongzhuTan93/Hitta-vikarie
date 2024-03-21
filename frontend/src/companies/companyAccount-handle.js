import React, { useState } from 'react'
import CompanyLogin from './company-login'
import CompanyRegister from './company-register'
import { useNavigate } from 'react-router-dom'

function CompanyAccountHandle({ onCompanyLogin, onCompanyRegister }) {
  const [showInputForm, setShowInputForm] = useState(true)
  const navigate = useNavigate()
 

  const handleCompanyLogin = () => {
    onCompanyLogin(true)
    navigate('/companyProfile-page')
  }

  const handleCompanyRegister = () => {
    console.log('Registrering lyckades, navigerar nu...')
    onCompanyRegister(true)
    navigate('/allAccount-login')
  }


  const handleEnterKeyLogin = (event) => {
    if (event.key === 'Enter') {
      handleCompanyLogin()
    }
  }

  const handleEnterKeyRegister = (event) => {
    if (event.key === 'Enter') {
      handleCompanyRegister()
    }
  }
  
  
  return (
    <div className='page-container-holder'>
      <div className='page-container'>
            <>
              {showInputForm ? (
                <>
                  <div className='alert-container'>
                    <div className='login-distence'>
                      <CompanyRegister onCompanyRegister={handleCompanyRegister} onEnterKey={handleEnterKeyRegister}/>
                    </div>
                    <p>Har du redan ett konto? Logga in här:</p>
                    <button onClick={() => setShowInputForm(false)}  type="button" className="btn btn-outline-danger">Login</button>
                  </div>
                </>
              ) : (
                <>
                  <div className='alert-container'>
                    <div className='login-distence'>
                      <CompanyLogin onCompanyLogin={handleCompanyLogin} onEnterKey={handleEnterKeyLogin} />
                    </div>
                    <p>Kom tillbaka till registreringssidan:</p>
                    <button onClick={() => setShowInputForm(true)}  type="button" className="btn btn-outline-danger">Registrera</button>
                  </div>
                </>
              )}
            </>
      </div>
    </div>
  )
}

export default CompanyAccountHandle
