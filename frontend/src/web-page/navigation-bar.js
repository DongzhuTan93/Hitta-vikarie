import React, { useEffect, useState } from 'react'
import { Navbar, Container, Nav } from 'react-bootstrap'
import logo from '../public/hitta-vikarie logo.jpg'
import { Link, useLocation } from 'react-router-dom'

function NavigationBar({ isLoggedIn, isCompanyLoggedIn}) {
  const location = useLocation();
  const [expanded, setExpanded] = useState(false);
  
  useEffect (() => {
  }, [isLoggedIn, isCompanyLoggedIn])

  const closeMenu = () => {
    setExpanded(false);
  };

  return (
    <Navbar expand="lg" expanded={expanded} onToggle={setExpanded} className="mobile-responsive-navbar">
      <Container fluid className="nav-container">
        <div className="d-flex justify-content-between align-items-center w-100">
          <Link to="/" onClick={closeMenu} className="navbar-brand">
            <img src={logo} alt="Hitta Vikarie Logo" className="logo-image" />
          </Link>
          
          <Navbar.Toggle aria-controls="responsive-navbar-nav" className="custom-toggler" />
        </div>
        
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="navbar-content ms-auto">
            <Link to="/" className={location.pathname === '/' ? 'active-link' : ''} onClick={closeMenu}>Hem</Link>
            <Link to="/company-register" className={location.pathname === '/company-register' ? 'active-link' : ''} onClick={closeMenu}>Hitta vikarie</Link>
            <Link to="/substitute-register" className={location.pathname === '/substitute-register' ? 'active-link' : ''} onClick={closeMenu}>Bli vikarie</Link>
            <Link to="/om-mig" className={location.pathname === '/om-mig' ? 'active-link' : ''} onClick={closeMenu}>Om mig</Link>
            <Link to="/kontakta-oss" className={location.pathname === '/kontakta-oss' ? 'active-link' : ''} onClick={closeMenu}>Kontakta mig</Link>
            {!isLoggedIn && !isCompanyLoggedIn && <Link to="/allAccount-login" className={location.pathname === '/allAccount-login' ? 'active-link' : ''} onClick={closeMenu}>Login</Link>}
            {isLoggedIn && <Link to="/substituteProfile-page" className={location.pathname === '/substituteProfile-page' ? 'active-link' : ''} onClick={closeMenu}>Vikarie profil</Link>}
            {isCompanyLoggedIn && <Link to="/companyProfile-page" className={location.pathname === '/companyProfile-page' ? 'active-link' : ''} onClick={closeMenu}>Företag profil</Link>} 
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default NavigationBar

