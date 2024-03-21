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
          <h2>Företag Profilsida</h2>
          <p>Här ser du alla vikarie:</p>
          <Link to="/showAllSubstitute-page">
          <button type="button" class="btn btn-outline-danger">Alla vikarie</button>
          </Link>
          <p>Logout här:</p>
          <button onClick={handleLogout}  type="button" className="btn btn-outline-danger">Logout</button>
      </div>
    </div>
  )
}

export default CompanyProfilePage