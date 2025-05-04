import React, { useEffect, useState } from 'react'
import { Navbar, Container, Nav } from 'react-bootstrap'
import logo from '../public/hitta-vikarie logo.jpg'
import { Link, useLocation, useNavigate } from 'react-router-dom'

function NavigationBar({ isLoggedIn, isCompanyLoggedIn}) {
  const location = useLocation();
  const navigate = useNavigate();
  const [expanded, setExpanded] = useState(false);
  
  useEffect (() => {
    // Close menu when login status changes
    setExpanded(false);
  }, [isLoggedIn, isCompanyLoggedIn])

  const closeMenu = () => {
    setExpanded(false);
  };

  const handleNavigation = (path) => {
    navigate(path);
    setExpanded(false);
  };

  const handleLogout = () => {
    // Redirect to home page
    navigate('/');
    setExpanded(false);
    
    // Reset login states - will trigger App.js logout handlers
    if (isLoggedIn) {
      window.location.href = '/?substitute_logout=true';
    } else if (isCompanyLoggedIn) {
      window.location.href = '/?company_logout=true';
    }
  };

  return (
    <Navbar expand="lg" expanded={expanded} onToggle={setExpanded} className="mobile-responsive-navbar">
      <Container fluid className="nav-container">
        <div className="d-flex justify-content-between align-items-center w-100">
          <Link to="/" onClick={closeMenu} className="navbar-brand">
            <img src={logo} alt="Hitta Vikarie Logo" className="logo-image" />
          </Link>
          
          <Navbar.Toggle 
            aria-controls="responsive-navbar-nav" 
            className="custom-toggler"
            aria-expanded={expanded} 
          />
        </div>
        
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="navbar-content ms-auto">
            <Link to="/" onClick={closeMenu} className={location.pathname === '/' ? 'active-link mobile-nav-link' : 'mobile-nav-link'}>Hem</Link>
            <Link to="/companyAccount" onClick={closeMenu} className={location.pathname === '/companyAccount' ? 'active-link mobile-nav-link' : 'mobile-nav-link'}>Hitta vikarie</Link>
            <Link to="/substituteAccount" onClick={closeMenu} className={location.pathname === '/substituteAccount' ? 'active-link mobile-nav-link' : 'mobile-nav-link'}>Bli vikarie</Link>
            <Link to="/om-oss" onClick={closeMenu} className={location.pathname === '/om-oss' ? 'active-link mobile-nav-link' : 'mobile-nav-link'}>Om oss</Link>
            {!isLoggedIn && !isCompanyLoggedIn && <Link to="/allAccount-login" onClick={closeMenu} className={location.pathname === '/allAccount-login' ? 'active-link mobile-nav-link' : 'mobile-nav-link'}>Login</Link>}
            {isLoggedIn && <Link to="/substituteProfile" onClick={closeMenu} className={location.pathname === '/substituteProfile' ? 'active-link mobile-nav-link' : 'mobile-nav-link'}>Vikarie profil</Link>}
            {isCompanyLoggedIn && <Link to="/companyProfile" onClick={closeMenu} className={location.pathname === '/companyProfile' ? 'active-link mobile-nav-link' : 'mobile-nav-link'}>Företag profil</Link>} 
            {(isLoggedIn || isCompanyLoggedIn) && 
              <Link to="#" onClick={handleLogout} className="mobile-nav-link logout-link">Logga ut</Link>
            }
          </Nav>
        </Navbar.Collapse>
        
        {expanded && (
          <button 
            onClick={closeMenu} 
            className="mobile-menu-close-btn"
          >
            &times;
          </button>
        )}
      </Container>
    </Navbar>
  )
}

export default NavigationBar

