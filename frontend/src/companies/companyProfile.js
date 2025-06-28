import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import userDefaultIcon from '../public/user-default-icon.js' // Importera standardbild

function CompanyProfilePage({ onCompanyLogout }) {
  const [companyname, setCompanyname] = useState("Företag") // Standard företagsnamn
  
  // Försök hämta företagsnamnet från localStorage
  useEffect(() => {
    const storedCompanyname = localStorage.getItem('companyname');
    if (storedCompanyname) {
      setCompanyname(storedCompanyname);
    }
  }, []);

  return (
    <div className='page-container-holder' style={{ backgroundColor: '#FDF6E3' }}>
      <div className="page-container profile-container">
        <h1>Företag Profilsida</h1>
        
        <div className="profile-card">
          <div className="profile-header">
            <div className="profile-avatar">
              <img src={userDefaultIcon} alt="Profilbild" />
            </div>
            <div className="profile-info">
              <h2>{companyname}</h2>
              <p className="profile-title">Företag</p>
            </div>
          </div>
          
          <div className="profile-actions">
            <Link to="/showAllSubstitute">
              <button type="button" className="profile-button primary-button">
                Visa alla vikarier
              </button>
            </Link>
          </div>
          
          <div className="profile-content">
            <h3>Företagsprofil</h3>
            <div className="profile-details">
              <div className="profile-detail-item">
                <span className="detail-label">Företagsnamn:</span>
                <span className="detail-value">{companyname}</span>
              </div>
              <div className="profile-detail-item">
                <span className="detail-label">Profiltyp:</span>
                <span className="detail-value">Företag</span>
              </div>
              <div className="profile-detail-item">
                <span className="detail-label">Status:</span>
                <span className="detail-value">Aktiv</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CompanyProfilePage