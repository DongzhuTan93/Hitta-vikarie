import React, { useState, useEffect } from 'react'
import Alert from 'react-bootstrap/Alert'
import { useNavigate } from 'react-router-dom'


function ShowCompanies({ onCompanyLogout, onLogout }) {
  const [companies, setCompanies] = useState([])
  const [message, setMessage] = useState('')
  const navigate = useNavigate()
  
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
      <div className="substitute-container" style={{ backgroundColor: '#FDF6E3', padding: '20px', borderRadius: '10px' }}>
        {companies.length === 0 ? (
          <>
            {message && <Alert variant={message.includes('success') ? 'success' : 'danger'}>{message}</Alert>}
          </>
        ) : (
          <>
            <p>Alla företag:</p> 
            {companies.map((company, index) => (
                <div key={index} className="substitute-box">
                  <h2>
                    <span className="highlight">Företag name:</span> {company.companyname}
                  </h2>
                  <h2>
                    <span className="highlight">Företag behov:</span> {company.availablePositions}
                  </h2>
                  <h2>
                    <span className="highlight">Kontakt företag:</span> {company.companyEmail}
                  </h2>
                </div>
              ))}
          </>
        )}
        <div className="job-opportunities-message">
          <p>Inga fler jobbmöjligheter tillgängliga</p>
        </div>
      </div>

  )
}

export default ShowCompanies
