 
import { useNavigate } from "react-router-dom"
import CompanyLogin from '../companies/company-login'
import SubstituteLogin from '../substitute/substitute-login'


function AccountLogin({ onCompanyLogin, onSubstituteLogin }) {
  const navigate = useNavigate()
 
  const handleCompanyLogin = () => {
    onCompanyLogin(true) // Update the isLoggedIn state to true
    navigate("/companyProfile-page") // Navigate to the profile page  
  }

  const handleSubstituteLogin = () => {
    onSubstituteLogin(true)
    navigate("/substituteProfile-page")
  }

  return (
    <div className='page-container-holder'>
      <div className="page-container">
        <div className="substitute-container">
            <>
              <div className="alert-container">
                <div className="login-distence">
                  <SubstituteLogin onSubstituteLogin={handleSubstituteLogin}/>
                </div>
                <p>---------------------------</p>
                <CompanyLogin onCompanyLogin={handleCompanyLogin}/>
                </div>
            </>
        </div>
      </div>
    </div>
  )
}
// I got button style inspiration here: https://getbootstrap.com/docs/5.0/components/buttons/ 
export default AccountLogin