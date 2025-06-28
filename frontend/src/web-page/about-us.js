import React, { useEffect } from 'react'
import developer from '../public/developer.jpg'

function OmOss() {
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

  const scrollToContent = () => {
    // Scroll to the content section on mobile
    const contentSection = document.querySelector('.text-content');
    if (contentSection) {
      contentSection.scrollIntoView({ behavior: 'smooth' });
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
        <div className="col-md-6 p-0" style={{ 
          height: `calc(100vh - ${navbarHeight}px)`, 
          position: 'relative',
          background: `url(${developer}) center center / cover no-repeat`,
          backgroundAttachment: 'local'
        }}>
          {/* Down Arrow for mobile */}
          <div className="down-arrow-container d-md-none" onClick={scrollToContent}>
            <div className="down-arrow"></div>
          </div>
        </div>
        
        {/* Right side - Content */}
        <div className="col-md-6 d-flex align-items-center" style={{ 
          padding: '2rem', 
          height: `calc(100vh - ${navbarHeight}px)`, 
          backgroundColor: '#f8f9fa' 
        }}>
          <div className="text-content p-md-4" style={{ maxHeight: '80vh', overflow: 'auto' }}>
            <h2 className="mb-4">Om Mig</h2>
            <p className="mb-3">Jag heter Dong och är ansvarig för programutveckling för Hitta-Vikarie. Jag är engagerad i att skapa den enklaste och mest effektiva mötesplatsen för dig!</p>
            <p>"Hitta vikarie" är utformad för att skapa en effektiv och användarvänlig kommunikationsplattform för både arbetsgivare och arbetssökande. Genom den här webbplatsen kan arbetssökande skapa ett konto, lämna sina kontaktuppgifter, detaljera sin arbetserfarenhet och ange sina tillgängliga arbetstider. På samma sätt kan arbetsgivare registrera sig och få tillgång till en lista över tillgängliga arbetssökande för en viss tidsperiod. Detta gör det möjligt för arbetsgivare att effektivt granska och kontakta lämpliga kandidater.</p>
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
        
        .text-content h2 {
          color: #333;
          font-weight: 600;
          position: relative;
          padding-bottom: 12px;
        }
        
        .text-content p {
          color: #555;
          line-height: 1.7;
          margin-bottom: 20px;
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

export default OmOss