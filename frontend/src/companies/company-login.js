import React, { useState, useEffect } from "react"
import Alert from 'react-bootstrap/Alert'
import { createErrorMessage } from "../utils/utils"
import { useNavigate } from "react-router-dom"


function CompanyLogin({ onCompanyLogin, onEnterKey, prefillUsername = "" }) {
  const [companyname, setSubstitutename] = useState(prefillUsername)
  const [password, setPassword] = useState("")
  const [message, setMessage] = useState("")
  const [requestStatus, setRequestStatus] = useState(null)
  const navigate = useNavigate()

  // Update username state if prefillUsername changes
  useEffect(() => {
    if (prefillUsername) {
      setSubstitutename(prefillUsername)
    }
  }, [prefillUsername])

  const handleCompanyLoginClick = async (event) => {

    event.preventDefault() // Prevent the form from refreshing the page

    const errorMessage = createErrorMessage(companyname, password)

    if (errorMessage) {
      setMessage(errorMessage)
    }

    if (!companyname || !password) {
      setMessage("Användarnamn och lösenord krävs!")
      return
    }

    const body = { 
      companyname: companyname,
      password: password
    }

    try {
      const response = await fetch(`${process.env.REACT_APP_API_BASE_URL}company/company-login`, {
        method: "POST",
        body: JSON.stringify(body),
        headers: {
          "Content-Type": "application/json"
        },
        credentials: "include" // Include cookies in the request
      })

      const data = await response.json()
      console.log(data)

      if (response.ok) {
        setMessage(data.message)

        if (data.message === "Företagslogin lyckades") {
          // Spara företagsnamnet i localStorage
          localStorage.setItem('companyname', companyname);
          
          onCompanyLogin() // Update the isLoggedIn state to true
          navigate("/companyProfile") // Navigate to the profile page
        }

      } else {
        setMessage("Inloggningen misslyckades. Kontrollera dina uppgifter.")
      }

      setRequestStatus(response.ok)
    } catch (error) {
      console.log(error)
      setMessage("Ett fel uppstod")
    }
  } // I got inspration from ChatGPT

  return (
    <div>
      {message && <Alert variant={requestStatus ? "success" : "danger"}>{message}</Alert>}
      <h1>Logga in</h1>
      <form onSubmit={handleCompanyLoginClick}>
        <div>
          <input 
            className="input-field"
            placeholder="Användarnamn" 
            value={companyname} 
            onChange={(event) => {setSubstitutename(event.target.value)}}
            onKeyDown={onEnterKey}
          />
        </div>
        <div>
          <input 
            className="input-field"
            placeholder="Lösenord minst 10 tecken" 
            type="password"
            value={password} 
            onChange={(event) => {setPassword(event.target.value)}}
            onKeyDown={onEnterKey}
          />
        </div>
        <div style={{ marginTop: '30px', textAlign: 'center' }}>
          <button 
            type="submit" 
            style={{ 
              backgroundColor: 'tomato', 
              color: 'white', 
              border: 'none', 
              padding: '12px 20px', 
              borderRadius: '6px', 
              fontSize: '16px', 
              cursor: 'pointer',
              width: '100%',
              maxWidth: '220px'
            }}
          >
            Logga in
          </button>
        </div>
      </form>
    </div>
  )
}

export default CompanyLogin
