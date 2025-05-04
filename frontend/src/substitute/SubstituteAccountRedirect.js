import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

function SubstituteAccountRedirect() {
  const navigate = useNavigate();
  
  useEffect(() => {
    // Redirect to the registration page as default
    navigate('/substitute-register');
  }, [navigate]);
  
  return <div>Redirecting...</div>;
}

export default SubstituteAccountRedirect; 