import React, { useEffect } from 'react';
import CompanyLogin from './company-login';
import CompanyRegister from './company-register';
import { useNavigate } from 'react-router-dom';
import companyImage from '../public/company-register.jpg'; // Adjusted the path
import Alert from 'react-bootstrap/Alert';

function CompanyAccountHandle({ onCompanyLogin, onCompanyRegister }) {
  const [showInputForm, setShowInputForm] = React.useState(true);
  const [registrationMessage, setRegistrationMessage] = React.useState("");
  const [registrationStatus, setRegistrationStatus] = React.useState(null);
  const [registeredUsername, setRegisteredUsername] = React.useState("");
  
  // Adjusted navbar height to account for any potential margins
  const navbarHeight = 130;
  
  // Apply CSS fix for entire page
  useEffect(() => {
    // Add classes to body when component mounts
    document.body.classList.add('no-overflow', 'no-margin');
    
    // Cleanup function to remove classes when component unmounts
    return () => {
      document.body.classList.remove('no-overflow', 'no-margin');
    };
  }, []);
  
  const navigate = useNavigate();

  const handleCompanyLogin = () => {
    onCompanyLogin(true);
    navigate('/companyProfile');
  };

  const handleCompanyRegister = (message, status, username) => {
    console.log('Registration successful, showing login form...');
    setRegistrationMessage(message);
    setRegistrationStatus(status);
    setRegisteredUsername(username); // Store the username
    setShowInputForm(false); // Switch to login form
    onCompanyRegister(true);
  };

  const handleEnterKeyLogin = (event) => {
    if (event.key === 'Enter') {
      handleCompanyLogin();
    }
  };

  const handleEnterKeyRegister = (event) => {
    if (event.key === 'Enter') {
      // This will be handled by the register component
    }
  };
  
  const scrollToForm = () => {
    // Scroll to the form section on mobile
    const formSection = document.querySelector('.col-md-5');
    if (formSection) {
      formSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="container-fluid p-0 main-container" style={{ 
      marginTop: "0", 
      marginBottom: "0", 
      minHeight: `calc(100vh - ${navbarHeight}px)` 
    }}>
      <div className="row g-0" style={{ 
        minHeight: `calc(100vh - ${navbarHeight}px)`, 
        maxHeight: `calc(100vh - ${navbarHeight}px)` 
      }}>
        {/* Left side - Image */}
        <div className="col-md-7 p-0" style={{ 
          height: `calc(100vh - ${navbarHeight}px)`, 
          position: 'relative',
          background: `url(${companyImage}) center center / cover no-repeat`,
          backgroundAttachment: 'local'
        }}>
          {/* Down Arrow for mobile */}
          <div className="down-arrow-container d-md-none" onClick={scrollToForm}>
            <div className="down-arrow"></div>
          </div>
        </div>
        
        {/* Right side - Card */}
        <div className="col-md-5 d-flex align-items-center justify-content-center" style={{ 
          padding: '0 2rem', 
          height: `calc(100vh - ${navbarHeight}px)`
        }}>
          <div className="card shadow" style={{ width: '100%', maxWidth: '420px', maxHeight: '80vh', borderRadius: '1rem', overflow: 'auto' }}>
            <div className="card-body p-4">
              {showInputForm ? (
                <>
                  <div className="text-center mb-3">
                    <h1>Företag</h1>
                  </div>
                  <CompanyRegister onCompanyRegister={handleCompanyRegister} onEnterKey={handleEnterKeyRegister} />
                  <div className="mt-2 text-center">
                    <p className="mb-0 small">Har du redan ett konto? <a href="#" onClick={(e) => {e.preventDefault(); setShowInputForm(false)}} className="login-link">Logga in här</a></p>
                  </div>
                </>
              ) : (
                <>
                  <div className="text-center mb-3">
                    <h3>Företagslogin</h3>
                  </div>
                  {registrationMessage && (
                    <Alert variant={registrationStatus ? "success" : "danger"}>
                      {registrationMessage}
                    </Alert>
                  )}
                  <CompanyLogin 
                    onCompanyLogin={handleCompanyLogin} 
                    onEnterKey={handleEnterKeyLogin} 
                    prefillUsername={registeredUsername}
                  />
                  <div className="mt-2 text-center">
                    <p className="mb-0 small">Behöver du ett företagskonto? <a href="#" onClick={(e) => {e.preventDefault(); setShowInputForm(true); setRegistrationMessage("");}} className="login-link">Registrera</a></p>
                  </div>
                </>
              )}
            </div>
          </div>
        </div>
      </div>
      
      <style jsx="true">{`
        .no-overflow {
          overflow: hidden !important;
        }
        
        .no-margin {
          margin: 0 !important;
          padding: 0 !important;
        }
        
        .main-container {
          position: relative;
          bottom: 0;
        }
        
        body, html {
          height: 100%;
          margin: 0;
          padding: 0;
        }
        
        .login-link {
          color: tomato;
          text-decoration: none;
        }
        
        .login-link:hover {
          text-decoration: underline;
        }
        
        /* Down Arrow Styling */
        .down-arrow-container {
          position: absolute;
          bottom: 20px;
          left: 50%;
          transform: translateX(-50%);
          width: 40px;
          height: 40px;
          display: flex;
          justify-content: center;
          align-items: center;
          background-color: rgba(255, 255, 255, 0.7);
          border-radius: 50%;
          cursor: pointer;
          z-index: 10;
          animation: bounce 2s infinite;
        }
        
        .down-arrow {
          width: 15px;
          height: 15px;
          border-right: 3px solid tomato;
          border-bottom: 3px solid tomato;
          transform: rotate(45deg);
        }
        
        @keyframes bounce {
          0%, 20%, 50%, 80%, 100% {
            transform: translateY(0) translateX(-50%);
          }
          40% {
            transform: translateY(-10px) translateX(-50%);
          }
          60% {
            transform: translateY(-5px) translateX(-50%);
          }
        }
      `}</style>
    </div>
  );
}

export default CompanyAccountHandle;
