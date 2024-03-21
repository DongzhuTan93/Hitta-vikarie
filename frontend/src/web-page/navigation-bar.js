import React, { useEffect } from 'react'
import { Navbar, Container, Nav } from 'react-bootstrap'
import logo from '../public/hitta-vikarie logo.jpg'
import { Link } from 'react-router-dom'

function NavigationBar({ isLoggedIn, isCompanyLoggedIn}) {
  useEffect (() => {
  }, [isLoggedIn, isCompanyLoggedIn])

  return (
    <Navbar bg="white" variant="light">
      <img src={logo} alt="Hitta Vikarie Logo" />
      <Container className="navbar-container d-flex justify-content-end">
        <Nav className="navbar-content">
          <Link to="/">Hem</Link>
          <Link to="/companyAccount-handle">Hitta vikarie</Link>
          <Link to="/substituteAccount-handle">Blir vikarie</Link>
          <Link to="/om-oss">Om oss</Link>
          <Link to="/kontakta-oss">Kontakta oss</Link>
          {!isLoggedIn && !isCompanyLoggedIn && <Link to="/allAccount-login">Login</Link>}
          {isLoggedIn && <Link to="/substituteProfile-page">Vikarie profil</Link>}
          {isCompanyLoggedIn && <Link to="/companyProfile-page">Företag profil</Link>} 
        </Nav>
      </Container>
    </Navbar>
  )
}

export default NavigationBar

