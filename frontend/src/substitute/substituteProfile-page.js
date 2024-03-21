import React from 'react'
import { useNavigate } from 'react-router-dom'
import { Link } from 'react-router-dom'

function SubstituteProfilePage({ onLogout }) {
  const navigate = useNavigate()

  const handleLogout = () => {
    onLogout()
    navigate('/')
  }

  
  return (
    <div className='page-container-holder'>
      <div className="page-container">
        <p>Vikarie Profilsida</p>
        <p>_________________________________</p>
        <Link to="/SubstituteNewOpportunities">
        <button type="button" className="btn btn-outline-danger">Nya ansökan</button>
        </Link>
        <div>
          <p>Här ser du alla Företaget:</p>
          <Link to="/showCompanies">
          <button type="button" className="btn btn-outline-danger">Jobbmöjligheter</button>
          </Link>
          <p>logga ut här:</p>
          <button onClick={handleLogout} type="button" className="btn btn-outline-danger">Logout</button>
        </div>
      </div>
    </div>
  )
}

export default SubstituteProfilePage
