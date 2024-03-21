import React, { useState } from "react"
import Alert from 'react-bootstrap/Alert'


function CompanyRegister({ onCompanyRegister }) {
  const [companyname, setSubstitutename] = useState("")
  const [companyEmail, setSubstituteEmail] = useState("")
  const [password, setPassword] = useState("")
  const [message, setMessage] = useState("")
  const [requestStatus, setRequestStatus] = useState(null)


  const handleCompanyRegisterClick = async(event) => {

    event.preventDefault() // Prevent the form from refreshing the page

    if (!companyname || !companyEmail || !password) {
      setMessage("Användarnamn, användarens e-postadress och lösenord krävs!")
      return
    }

    const body = { 
      companyname: companyname,
      companyEmail: companyEmail,
      password: password,
    }


    try {
      const response = await fetch(`${process.env.REACT_APP_API_BASE_URL}company/company-register`, {
      method: "POST",
      body: JSON.stringify(body),
      headers: {
        "Content-Type": "application/json",  
      },
    })
    const data = await response.json()

    if (response.ok) {
      setMessage(data.message)

      if (data.message === "Företaget har skapats, vänligen logga in med dina inloggningsuppgifter.") {
        onCompanyRegister() // Update the isLoggedIn state to true
      }

    } else {
      setMessage("Företag registreringen misslyckades. Kontrollera dina uppgifter .")
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
      <h1>Registrera dig för att se alla vikarie:</h1>
      <form onSubmit={handleCompanyRegisterClick}>
        <div>
          <input placeholder="Användarnamn" value={companyname} onChange={(event) => {setSubstitutename(event.target.value)}}/>
        </div>
        <div>
          <input placeholder="Användarens e-post" value={companyEmail} onChange={(event) => {setSubstituteEmail(event.target.value)}}/>
        </div>
        <div>
          <input placeholder="Lösenord minst 10 tecken" value={password} onChange={(event) => {setPassword(event.target.value)}}/>
        </div>
        <button type="submit" style={{ marginTop: '20px' }} className="btn btn-outline-danger">Registrera</button>
      </form>
    </div>
  )
}

export default CompanyRegister

