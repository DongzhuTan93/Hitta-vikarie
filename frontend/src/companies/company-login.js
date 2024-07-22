import React, { useState } from "react"
import Alert from 'react-bootstrap/Alert'
import { createErrorMessage } from "../utils/utils"


function CompanyLogin({ onCompanyLogin }) {
  const [companyname, setSubstitutename] = useState("")
  const [password, setPassword] = useState("")
  const [message, setMessage] = useState("")
  const [requestStatus, setRequestStatus] = useState(null)

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
          onCompanyLogin() // Update the isLoggedIn state to true
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
      <h1>Företaget logga in här:</h1>
      <form onSubmit={handleCompanyLoginClick}>
        <div>
          <input 
            className="input-field"
            placeholder="Användarnamn" 
            value={companyname} 
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

export default CompanyLogin
