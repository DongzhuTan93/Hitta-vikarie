import React from 'react'
import ContactUs from '../public/contact-us.jpg'

function KontaktaOss() {
  return (
    <div className='page-container-holder'>
      <div className="page-container">
        <img src={ContactUs} alt="Contact us" className="about-us-image" />
          <h2>Kontakta Oss</h2>
          <p>Telefon: 076-057-XXXX</p>
          <p>E-post: hittaVikarie@gmail.com</p>
      </div>
    </div>
  )
}

export default KontaktaOss
