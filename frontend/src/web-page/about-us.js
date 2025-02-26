import React from 'react'
import developer from '../public/developer.jpg'

function OmOss() {
  return (
    <div className="om-oss-container">
      <div className="image-section">
        <img src={developer} alt="Developer" className="about-image" />
      </div>
      <div className="text-section">
        <div className="text-content">
          <p>Jag är en programutvecklare baserad i Kalmar. Jag heter Dong och är ansvarig för både programutveckling och marknadsföring. Jag är engagerad i att skapa den enklaste och mest effektiva mötesplatsen för dig!</p>
          <p>"Hitta vikarie" är utformad för att skapa en effektiv och användarvänlig kommunikationsplattform för både arbetsgivare och arbetssökande. Genom den här webbplatsen kan arbetssökande skapa ett konto, lämna sina kontaktuppgifter, detaljera sin arbetserfarenhet och ange sina tillgängliga arbetstider. På samma sätt kan arbetsgivare registrera sig och få tillgång till en lista över tillgängliga arbetssökande för en viss tidsperiod. Detta gör det möjligt för arbetsgivare att effektivt granska och kontakta lämpliga kandidater.</p>
        </div>
      </div>
    </div>
  )
}

export default OmOss