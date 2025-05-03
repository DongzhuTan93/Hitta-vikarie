import React, { useState } from "react"
import Alert from 'react-bootstrap/Alert'


function SubstituteLogin({ onSubstituteLogin }) {
  const [substitutename, setSubstitutename] = useState("")
  const [password, setPassword] = useState("")
  const [message, setMessage] = useState("")
  const [requestStatus, setRequestStatus] = useState(null)

  const handleSubstituteLoginClick = async (event) => {
    event.preventDefault() // Prevent the form from refreshing the page

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

        if (data.message === "Användarinloggning lyckades") {
          onSubstituteLogin() // Update the isLoggedIn state to true
        }
      } else {
        // More detailed error message
        setMessage(`Inloggningen misslyckades: ${data.message || 'Kontrollera dina inloggningsuppgifter.'}`)
      }

      setRequestStatus(response.ok)
    } catch (error) {
      console.log("Login error:", error)
      setMessage("Ett fel uppstod vid inloggning. Försök igen.")
    }
  }

  return (
    <div>
      {message && <Alert variant={requestStatus ? "success" : "danger"}>{message}</Alert>}
      <h1>Vikarie logga in här:</h1>
      <form onSubmit={handleSubstituteLoginClick}>
        <div>
          <input 
            className="input-field"
            placeholder="Användarnamn" 
            value={substitutename} 
            onChange={(event) => {setSubstitutename(event.target.value)}}
          />
        </div>
        <div>
          <input 
            className="input-field"
            placeholder="Lösenord minst 10 tecken" 
            type="password"
            value={password} 
            onChange={(event) => {setPassword(event.target.value)}}
          />
        </div>
        <button type="submit" style={{ marginTop: '20px' }} className="btn btn-outline-danger">Login</button>
      </form>
    </div>
  )
}

export default SubstituteLogin

//  I got inspration with alert layout from here: https://bootstrap-4-react.com/#documentation/components
