import React, { useState, useEffect } from 'react'
import Alert from 'react-bootstrap/Alert'
import { useNavigate } from 'react-router-dom'


function ShowSubstitute({ onLogout, onCompanyLogout }) {
  const [substitutes, setSubstitutes] = useState([])
  const [message, setMessage] = useState('')
  const navigate = useNavigate()

  const handleLogout = () => {
    onLogout()
    onCompanyLogout()
    navigate("/") // Set login state to false
  }


  useEffect(() => {
    const getSubstitutes = async () => {
      try {
        const response = await fetch(`${process.env.REACT_APP_API_BASE_URL}substitute/get-all-substitutes`, {
          credentials: 'include' // Include cookies in the request
        })
        const result = await response.json()
        setSubstitutes(result)
      } catch (error) {
        setMessage('An error occurred')
      }
    }

    // Fetch data when the component mounts
      getSubstitutes()
  
  },[]) // Empty dependency array to run this effect only once (From ChatGPT)


  return (
    <div className='page-container-holder'>
      <div className="page-container">
        {substitutes.length === 0 ? (
          <>
            {message && <Alert variant={message.includes('success') ? 'success' : 'danger'}>{message}</Alert>}
          </>
        ) : (
          <>
            <p>Alla tillgängliga vikarie:</p> 
            {substitutes.map((substitute, index) => (
                <div key={index} className="substitute-box">
                  <p>
                    <span className="highlight">Vikaries name:</span> {substitute.substitutename}
                  </p>
                  <p>
                    <span className="highlight">Vikaries yrke:</span> {substitute.occupation}
                  </p>
                  <p>
                    <span className="highlight">Vikaries tillgänglig tid:</span> {substitute.freetime}
                  </p>
                  <p>
                    <span className="highlight">Kontakt mig:</span> {substitute.substituteEmail}
                  </p>
                </div>
              ))}
            </>
          )}
          <p>Logout här:</p>
          <button onClick={handleLogout}  type="button" className="btn btn-outline-danger">Logout</button>
      </div>
    </div>
  )
}

export default ShowSubstitute
