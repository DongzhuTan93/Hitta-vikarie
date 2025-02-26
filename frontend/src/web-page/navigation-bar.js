import React, { useEffect } from 'react'
import { Navbar, Container, Nav } from 'react-bootstrap'
import logo from '../public/hitta-vikarie logo.jpg'
import { Link, useLocation } from 'react-router-dom'

function NavigationBar({ isLoggedIn, isCompanyLoggedIn}) {
  const location = useLocation();
  
  useEffect (() => {
  }, [isLoggedIn, isCompanyLoggedIn])

  return (
    <Navbar bg="white" variant="light">
      <Link to="/">
        <img src={logo} alt="Hitta Vikarie Logo" />
      </Link>
      <Container className="navbar-container d-flex justify-content-end ">
        <Nav className="navbar-content">
          <Link to="/" className={location.pathname === '/' ? 'active-link' : ''}>Hem</Link>
          <Link to="/companyAccount-handle" className={location.pathname === '/companyAccount-handle' ? 'active-link' : ''}>Hitta vikarie</Link>
          <Link to="/substituteAccount-handle" className={location.pathname === '/substituteAccount-handle' ? 'active-link' : ''}>Bli vikarie</Link>
          <Link to="/om-oss" className={location.pathname === '/om-oss' ? 'active-link' : ''}>Om mig</Link>
          <Link to="/kontakta-oss" className={location.pathname === '/kontakta-oss' ? 'active-link' : ''}>Kontakta mig</Link>
          {!isLoggedIn && !isCompanyLoggedIn && <Link to="/allAccount-login" className={location.pathname === '/allAccount-login' ? 'active-link' : ''}>Login</Link>}
          {isLoggedIn && <Link to="/substituteProfile-page" className={location.pathname === '/substituteProfile-page' ? 'active-link' : ''}>Vikarie profil</Link>}
          {isCompanyLoggedIn && <Link to="/companyProfile-page" className={location.pathname === '/companyProfile-page' ? 'active-link' : ''}>Företag profil</Link>} 
        </Nav>
      </Container>
    </Navbar>
  )
}

export default NavigationBar

