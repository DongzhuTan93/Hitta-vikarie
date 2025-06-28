import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css'
import { setCookieConsent, hasGivenCookieConsent } from '../utils/utils'

function GDPRConsent() {
  const [showBanner, setShowBanner] = useState(false)

  useEffect(() => {
    // Check if user has already given consent (accepted or declined)
    if (!hasGivenCookieConsent()) {
      setShowBanner(true)
    }
  }, [])

  const acceptCookies = () => {
    setCookieConsent(true)
    setShowBanner(false)
  }

  const declineCookies = () => {
    setCookieConsent(false)
    setShowBanner(false)
  }

  return (
    <>
      {/* Cookie Consent Banner */}
      {showBanner && (
        <div className="fixed-bottom bg-dark text-white p-3" style={{
          zIndex: 1050,
          boxShadow: '0 -2px 10px rgba(0,0,0,0.3)'
        }}>
          <div className="container">
            <div className="row align-items-center">
              <div className="col-md-8">
                <h6 className="mb-2">🍪 Vi använder cookies</h6>
                <p className="mb-0 small">
                  Denna webbplats använder cookies för att förbättra din upplevelse och för att webbplatsen ska fungera korrekt. 
                  Vi samlar också in personuppgifter som namn, e-post och andra kontaktuppgifter för att tillhandahålla våra tjänster.
                  <Link to="/integritetspolicy" className="text-light ms-2">
                    <u>Läs vår integritetspolicy</u>
                  </Link>
                </p>
              </div>
              <div className="col-md-4 text-md-end mt-2 mt-md-0">
                <button 
                  className="btn btn-success me-2 mb-1"
                  onClick={acceptCookies}
                >
                  Acceptera alla
                </button>
                <button 
                  className="btn btn-outline-light mb-1"
                  onClick={declineCookies}
                >
                  Nödvändiga endast
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      <style jsx="true">{`
        @media (max-width: 768px) {
          .fixed-bottom .btn {
            font-size: 0.875rem;
            padding: 0.375rem 0.75rem;
          }
        }
      `}</style>
    </>
  )
}

export default GDPRConsent 