import React from 'react'
import githubIcon from '../public/github.png'
import linkedinIcon from '../public/linkedin.png'

function KontaktaOss() {
  return (
    <div className='contact-page-container'>
      <div className="contact-info">
        <p>GÅ MED I VÅRT NYHETSBREV</p>
        <h2>Funkabo, 39350, Kalmar, Sverige</h2>
        <h2>076-456-7890</h2>
        <h2>Mån-fre: 9:00-16:00,</h2>
        <h2>tandongzhu@gmail.com</h2>
        <h2>Följ oss</h2>
        <div className="social-icons">
          <a href="https://github.com/DongzhuTan93/" target="_blank" rel="noopener noreferrer">
            <img src={githubIcon} alt="GitHub" className="social-icon" />
          </a>
          <a href="https://www.linkedin.com/in/dongzhu-tan-891b13241/" target="_blank" rel="noopener noreferrer">
            <img src={linkedinIcon} alt="LinkedIn" className="social-icon" />
          </a>
        </div>
        <h2>© 2024 Sekretesspolicy</h2>
      </div>
      <div className="contact-form-container">
        <h2>Kontakta oss</h2>
        <form className="contact-form">
          <input type="text" placeholder="Ange ditt namn" />
          <input type="email" placeholder="Ange en giltig e-postadress" />
          <textarea placeholder="Ange ditt meddelande"></textarea>
          <button type="submit">SKICKA IN</button>
        </form>
      </div>
    </div>
  )
}

export default KontaktaOss