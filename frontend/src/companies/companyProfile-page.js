import React from 'react'
import { useNavigate } from 'react-router-dom'
import { Link } from 'react-router-dom'


function CompanyProfilePage({ onCompanyLogout }) {
  const navigate = useNavigate()

  const handleLogout = () => {
    onCompanyLogout()
    navigate("/") // Set login state to false
  }

  
  return (
    <div className='page-container-holder'>
      <div className="page-container">
          <h1>Företag Profilsida</h1>
          <p>_________________________________</p>
          <h2>Här ser du alla vikarie:</h2>
          <Link to="/showAllSubstitute-page">
          <button type="button" class="btn btn-outline-danger">Alla vikarie</button>
          </Link>
          <h2>Logout här:</h2>
          <button onClick={handleLogout}  type="button" className="btn btn-outline-danger">Logout</button>
      </div>
    </div>
  )
}

export default CompanyProfilePage