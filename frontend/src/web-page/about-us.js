import React from 'react'
import aboutUs from '../public/about-us.jpg'


function OmOss() {
  return (
    <div className="om-oss-container">
      <div className="image-section">
        <img src={aboutUs} alt="About us" className="about-image" />
      </div>
      <div className="text-section">
        <div className="text-content">
          <h2>Om Oss</h2>
          <p>Vi är ett utvecklingsteam på två personer baserade i Kalmar, en ansvarig för programutveckling och den andra ansvarig för marknadsföring. Vi är engagerade i att skapa den enklaste och mest effektiva mötesplatsen för dig!</p>
          <p>"Hitta vikarie" är utformad för att skapa en effektiv och användarvänlig kommunikationsplattform för både arbetsgivare och arbetssökande. Genom den här webbplatsen kan arbetssökande skapa ett konto, lämna sina kontaktuppgifter, detaljera sin arbetserfarenhet och ange sina tillgängliga arbetstider. På samma sätt kan arbetsgivare registrera sig och få tillgång till en lista över tillgängliga arbetssökande för en viss tidsperiod. Detta gör det möjligt för arbetsgivare att effektivt granska och kontakta lämpliga kandidater.</p>
        </div>
      </div>
    </div>
  )
}

export default OmOss