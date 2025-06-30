import React, { useState, useEffect } from "react"
import Alert from 'react-bootstrap/Alert'
import { createErrorMessage } from "../utils/utils"
import { useNavigate } from "react-router-dom"

function SubstituteLogin({ onSubstituteLogin, onEnterKey, prefillUsername = "", registrationSuccess = false }) {
  const [substitutename, setSubstitutename] = useState(prefillUsername)
  const [password, setPassword] = useState("")
  const [message, setMessage] = useState("")
  const [requestStatus, setRequestStatus] = useState(null)
  const navigate = useNavigate()

  // Update username state if prefillUsername changes
  useEffect(() => {
    if (prefillUsername) {
      setSubstitutename(prefillUsername)
    }
    if (registrationSuccess) {
      setMessage("Registrering lyckades! Du kan nu logga in.")
      setRequestStatus(true)
    }
  }, [prefillUsername, registrationSuccess])

  const handleSubstituteLoginClick = async (event) => {
    event.preventDefault() // Prevent the form from refreshing the page

    const errorMessage = createErrorMessage(substitutename, password)

    if (errorMessage) {
      setMessage(errorMessage)
      return
    }

    if (!substitutename || !password) {
      setMessage("Användarnamn och lösenord krävs!")
      return
    }

    // Add some basic logging to debug
    console.log("Attempting login with:", { substitutename, passwordLength: password.length });

    const body = { 
      substitutename: substitutename,
      password: password
    }

    try {
      // Log the API endpoint for debugging
      console.log("Sending request to:", `${process.env.REACT_APP_API_BASE_URL}substitute/substitute-login`);
      
      const response = await fetch(`${process.env.REACT_APP_API_BASE_URL}substitute/substitute-login`, {
        method: "POST",
        body: JSON.stringify(body),
        headers: {
          "Content-Type": "application/json"
        },
        credentials: "include" // Include cookies in the request
      })

      // Log the raw response for debugging
      console.log("Response status:", response.status);
      
      const data = await response.json()
      console.log("Response data:", data)

      if (response.ok) {
        setMessage(data.message)

        if (data.message === "Inloggning lyckades" || data.message === "Användarinloggning lyckades") {
          // Spara användarnamnet i localStorage
          localStorage.setItem('substitutename', substitutename);
          
          onSubstituteLogin() // Update the isLoggedIn state to true
          navigate("/substituteProfile") // Navigate to the profile page
        }
      } else {
        setMessage("Inloggningen misslyckades. Kontrollera dina uppgifter.")
      }

      setRequestStatus(response.ok)
    } catch (error) {
      console.log("Login error:", error)
      setMessage("Databasen är inte tillgänglig på produktionsservern. Kontakta utvecklaren för en lokal demonstration av applikationen.")
    }
  }

  return (
    <div>
      {message && <Alert variant={requestStatus ? "success" : "danger"}>{message}</Alert>}
      <h1>Logga in</h1>
      <form onSubmit={handleSubstituteLoginClick}>
        <div>
          <input 
            className="input-field"
            placeholder="Användarnamn" 
            value={substitutename} 
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

export default SubstituteLogin

//  I got inspration with alert layout from here: https://bootstrap-4-react.com/#documentation/components
