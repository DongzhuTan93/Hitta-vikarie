import React, { useState } from "react"
import Alert from 'react-bootstrap/Alert'


function SubstituteRegister({ onSubstituteRegister, onEnterKey }) {
  const [substitutename, setSubstitutename] = useState("")
  const [substituteEmail, setSubstituteEmail] = useState("")
  const [password, setPassword] = useState("")
  const [message, setMessage] = useState("")
  const [requestStatus, setRequestStatus] = useState(null)


  const handleSubstituteRegisterClick = async(event) => {

    event.preventDefault() // Prevent the form from refreshing the page


    if (!substitutename || !substituteEmail || !password) {
      setMessage("Användarnamn, användarens e-postadress och lösenord krävs!")
      return
    }

    const body = { 
      substitutename: substitutename,
      substituteEmail: substituteEmail,
      password: password,
    }

    try {
      const response = await fetch(`${process.env.REACT_APP_API_BASE_URL}substitute/substitute-register`, {
        method: "POST",
        body: JSON.stringify(body),
        headers: {
          "Content-Type": "application/json"
        },
      })

      const data = await response.json()

      if (response.ok) {
        // Always use this specific message for successful registration
        const successMessage = "Vikarie skapades! Logga in med dina uppgifter."
        setMessage(successMessage)
        onSubstituteRegister(successMessage, true, substitutename)
      } else {
        setMessage("Vikarie registreringen misslyckades. Kontrollera dina uppgifter .")
      }

      setRequestStatus(response.ok)
    } catch (error) {
      console.log(error)
      setMessage("Ett fel uppstod")
    }
    
  }
  
  return (
    <div>
      {message && <Alert variant={requestStatus ? "success" : "danger"}>{message}</Alert>}
      <h1>Registrera dig för att ser lediga tjänster:</h1>
      <form onSubmit={ handleSubstituteRegisterClick}>
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
            placeholder="Användarens e-post" 
            value={substituteEmail} 
            onChange={(event) => {setSubstituteEmail(event.target.value)}}
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
        <button type="submit" style={{ marginTop: '20px' }} className="btn btn-outline-danger">Registrera</button>
      </form>
      </div>

  )
}

export default SubstituteRegister

