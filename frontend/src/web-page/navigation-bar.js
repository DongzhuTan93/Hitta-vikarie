import React, { useEffect, useState } from 'react'
import { Navbar, Container, Nav } from 'react-bootstrap'
import logo from '../public/hitta-vikarie logo.jpg'
import { Link, useLocation, useNavigate } from 'react-router-dom'

function NavigationBar({ isLoggedIn, isCompanyLoggedIn}) {
  const location = useLocation();
  const navigate = useNavigate();
  const [expanded, setExpanded] = useState(false);
  
  // Reset menu state when route changes
  useEffect(() => {
    setExpanded(false);
    // Ensure scrolling is enabled when navigating to a new page
    document.body.style.overflow = '';
    window.scrollTo(0, 0);
  }, [location.pathname]);
  
  useEffect (() => {
    // Close menu when login status changes
    setExpanded(false);
  }, [isLoggedIn, isCompanyLoggedIn])
  
  // Effect to manage body scrolling when menu is expanded
  useEffect(() => {
    // When menu is expanded, prevent body scrolling but allow menu to scroll
    if (expanded) {
      document.body.style.overflow = 'hidden';
    } else {
      // When menu is closed, restore normal scrolling
      document.body.style.overflow = '';
      
      // Small delay to ensure scroll is enabled after animation completes
      setTimeout(() => {
        document.body.style.overflow = '';
      }, 300);
    }
    
    // Cleanup when component unmounts
    return () => {
      document.body.style.overflow = '';
    };
  }, [expanded]);

  const closeMenu = () => {
    setExpanded(false);
    // Explicitly enable scrolling when menu is closed
    setTimeout(() => {
      document.body.style.overflow = '';
    }, 50);
  };

  const handleNavigation = (path) => {
    setExpanded(false);
    // Ensure scrolling is enabled before navigation
    document.body.style.overflow = '';
    navigate(path);
  };

  const handleLogout = () => {
    setExpanded(false);
    // Enable scrolling
    document.body.style.overflow = '';
    
    // Redirect to home page
    navigate('/');
    
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
        <Link to="/" onClick={closeMenu} className="navbar-brand">
          <img src={logo} alt="Hitta Vikarie Logo" className="logo-image" />
        </Link>
        
        <Navbar.Toggle 
          aria-controls="responsive-navbar-nav" 
          className="custom-toggler"
          aria-expanded={expanded} 
        />
        
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="navbar-content ms-auto">
            <Link to="/" onClick={closeMenu} className={location.pathname === '/' ? 'active-link mobile-nav-link' : 'mobile-nav-link'}>Hem</Link>
            <Link to="/companyAccount" onClick={closeMenu} className={location.pathname === '/companyAccount' ? 'active-link mobile-nav-link' : 'mobile-nav-link'}>Hitta vikarie</Link>
            <Link to="/substituteAccount" onClick={closeMenu} className={location.pathname === '/substituteAccount' ? 'active-link mobile-nav-link' : 'mobile-nav-link'}>Bli vikarie</Link>
            <Link to="/om-oss" onClick={closeMenu} className={location.pathname === '/om-oss' ? 'active-link mobile-nav-link' : 'mobile-nav-link'}>Om Mig</Link>
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

