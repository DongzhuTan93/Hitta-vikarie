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

    const body = { 
      substitutename: substitutename,
      password: password
    }

    try {
      const response = await fetch(`${process.env.REACT_APP_API_BASE_URL}substitute/substitute-login`, {
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

        if (data.message === "Användarinloggning lyckades") {
          onSubstituteLogin() // Update the isLoggedIn state to true
        }

      } else {
        setMessage("Inloggningen misslyckades. Kontrollera dina inloggningsuppgifter .")
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
