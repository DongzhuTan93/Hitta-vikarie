import React, { useState } from "react"
import Alert from 'react-bootstrap/Alert'


function SubstituteNewOpportunities({ onSubstituteLogin }) {
  const [occupation, setOccupation] = useState("")
  const [availableTime, setAvabiletime] = useState("")
  const [message, setMessage] = useState("")


  const handleSubstituteRegisterClick = async(event) => {

    event.preventDefault() // Prevent the form from refreshing the page


    if (!occupation || !availableTime ) {
      setMessage("Användarnamn, användarens e-postadress och lösenord krävs!")
      return
    }

    const body = { 
      occupation: occupation,
      availableTime: availableTime,
    }

    try {
      const response = await fetch(`${process.env.REACT_APP_API_BASE_URL}substitute-occupation/create`, {
        method: "POST",
        body: JSON.stringify(body),
        headers: {
          "Content-Type": "application/json"
        },
      })

      const data = await response.json()

      if (response.ok) {
        setMessage(data.message)

        if (data.message === "Nya möjligheter skapades!") {
          onSubstituteLogin() // Update the isLoggedIn state to true
        }

      } else {
        setMessage("Nya möjligheter misslyckades skapa. Kontrollera dina uppgifter.")
      }
    } catch (error) {
      console.log(error)
      setMessage("Ett fel uppstod")
    }
    
  }
  
  return (
    <div>
      {message && <Alert variant={message.includes("success") ? "success" : "danger"}>{message}</Alert>}
      <form onSubmit={ handleSubstituteRegisterClick}>
      <div>
          <input placeholder="Yrke" value={occupation} onChange={(event) => {setOccupation(event.target.value)}}/>
        </div>
        <div>
          <input placeholder="Tillgänglig tid" value={availableTime} onChange={(event) => {setAvabiletime(event.target.value)}}/>
        </div>
          <button type="submit" style={{ marginTop: '20px' }}  className="btn btn-outline-danger">Skapa</button>
      </form>
    </div>
  )
}

export default SubstituteNewOpportunities

