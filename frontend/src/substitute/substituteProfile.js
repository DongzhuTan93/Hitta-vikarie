import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { Link } from 'react-router-dom'
import userDefaultIcon from '../public/user-default-icon.js' // Importera standardbild från JS-fil

function SubstituteProfilePage({ onLogout }) {
  const navigate = useNavigate()
  const [username, setUsername] = useState("Användare") // Standard användarnamn
  
  // Försök hämta användarnamnet från API/cookie
  useEffect(() => {
    // Här kan du lägga till kod för att hämta användarinformation från servern
    // För nu använder vi ett hårdkodat värde
    const storedUsername = localStorage.getItem('substitutename');
    if (storedUsername) {
      setUsername(storedUsername);
    }
  }, []);

  return (
    <div className='page-container-holder' style={{ backgroundColor: '#FDF6E3' }}>
      <div className="page-container profile-container">
        <h1>Vikarie Profilsida</h1>
        
        <div className="profile-card">
          <div className="profile-header">
            <div className="profile-avatar">
              <img src={userDefaultIcon} alt="Profilbild" />
            </div>
            <div className="profile-info">
              <h2>{username}</h2>
              <p className="profile-title">Vikarie</p>
            </div>
          </div>
          
          <div className="profile-actions">
            <Link to="/showCompanies">
              <button type="button" className="profile-button primary-button">
                Jobbmöjligheter
              </button>
            </Link>
          </div>
          
          <div className="profile-content">
            <h3>Min Profil</h3>
            <div className="profile-details">
              <div className="profile-detail-item">
                <span className="detail-label">Användarnamn:</span>
                <span className="detail-value">{username}</span>
              </div>
              <div className="profile-detail-item">
                <span className="detail-label">Profiltyp:</span>
                <span className="detail-value">Vikarie</span>
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

export default SubstituteProfilePage
