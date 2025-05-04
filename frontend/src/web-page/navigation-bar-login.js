import { useNavigate } from "react-router-dom"
import CompanyLogin from "../companies/company-login"
import SubstituteLogin from "../substitute/substitute-login"

function AccountLogin({ onCompanyLogin, onSubstituteLogin }) {
  const navigate = useNavigate()

  const handleCompanyLogin = () => {
    onCompanyLogin(true) // Update the isLoggedIn state to true
    navigate("/companyProfile") // Navigate to the profile page
  };

  const handleSubstituteLogin = () => {
    onSubstituteLogin(true)
    navigate("/substituteProfile")
  };

  return (
    <div className="contact-page-container">
      <div className="contact-card">
        <div className="contact-info">
          <h2 className="contact-title">Vikarie-inloggning</h2>
          <div className="login-distence">
            <SubstituteLogin onSubstituteLogin={handleSubstituteLogin} />
          </div>
        </div>
        <div className="contact-form-container">
          <h2 className="contact-title">Företags-inloggning</h2>
          <div className="login-form-wrapper">
            <CompanyLogin onCompanyLogin={handleCompanyLogin} />
          </div>
        </div>
      </div>
    </div>
  )
}

export default AccountLogin
