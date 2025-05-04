import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

function CompanyAccountRedirect() {
  const navigate = useNavigate();
  
  useEffect(() => {
    // Redirect to the registration page as default
    navigate('/company-register');
  }, [navigate]);
  
  return <div>Redirecting...</div>;
}

export default CompanyAccountRedirect; 