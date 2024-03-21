import React, { useState, useEffect } from 'react'
import Alert from 'react-bootstrap/Alert'
import { useNavigate } from 'react-router-dom'


function ShowCompanies({ onCompanyLogout, onLogout }) {
  const [companies, setCompanies] = useState([])
  const [message, setMessage] = useState('')
  const navigate = useNavigate()

  const handleLogout = () => {
    onCompanyLogout()
    onLogout()
    navigate("/") // Set login state to false
  }
  
  
  useEffect(() => {
    const getCompanies = async () => {
      try {
        const response = await fetch(`${process.env.REACT_APP_API_BASE_URL}company/show-all-companies`, {
          credentials: 'include' // Include cookies in the request
        })
        const result = await response.json()
        setCompanies(result)
      } catch (error) {
        setMessage('An error occurred')
      }
    }

    getCompanies()
  }, [])



  return (
    <div className='page-container-holder'>
      <div className="page-container">
        {companies.length === 0 ? (
          <>
            {message && <Alert variant={message.includes('success') ? 'success' : 'danger'}>{message}</Alert>}
          </>
        ) : (
          <div className='box-container'>
            <p>Alla företag:</p> 
            {companies.map((company, index) => (
                <div key={index} className="substitute-box">
                  <p>
                    <span className="highlight">Företag name:</span> {company.companyname}
                  </p>
                  <p>
                    <span className="highlight">Företag behov:</span> {company.availablePositions}
                  </p>
                  <p>
                    <span className="highlight">Kontakt företag:</span> {company.companyEmail}
                  </p>
                </div>
              ))}
            </div>
        )}
        <p>Logout här:</p>
          <button onClick={handleLogout}  type="button" className="btn btn-outline-danger">Logout</button>
      </div>
    </div>
  )
}

export default ShowCompanies
