import React from 'react'
import githubIcon from '../public/github.jpg'
import linkedinIcon from '../public/linkedin.png'

function KontaktaOss() {
  return (
    <div className='contact-page-container'>
      <div className="contact-card">
        <div className="contact-info">
          <h2 className="contact-title">Kontakta oss</h2>
          <div className="contact-detail">
            <i className="contact-icon location-icon"></i>
            <p>Funkabo, 39350, Kalmar, Sverige</p>
          </div>
          <div className="contact-detail">
            <i className="contact-icon phone-icon"></i>
            <p>076-456-7890</p>
          </div>
          <div className="contact-detail">
            <i className="contact-icon time-icon"></i>
            <p>Mån-fre: 9:00-16:00</p>
          </div>
          <div className="contact-detail">
            <i className="contact-icon email-icon"></i>
            <p>tandongzhu@gmail.com</p>
          </div>
          
          {/* Footer section with smaller text and better spacing */}
          <div className="footer-section">
            <h3 className="footer-title">Följ oss</h3>
            <div className="footer-social">
              <a href="https://github.com/DongzhuTan93/" target="_blank" rel="noopener noreferrer" className="footer-social-link">
                <img src={githubIcon} alt="GitHub" className="footer-social-icon" />
              </a>
              <a href="https://www.linkedin.com/in/dongzhu-tan-891b13241/" target="_blank" rel="noopener noreferrer" className="footer-social-link">
                <img src={linkedinIcon} alt="LinkedIn" className="footer-social-icon" />
              </a>
            </div>
          </div>
          
          <div className="footer-newsletter">
            <h3 className="footer-title">GÅ MED I VÅRT NYHETSBREV</h3>
            <div className="footer-newsletter-form">
              <input type="email" placeholder="Din e-postadress" className="footer-newsletter-input" />
              <button className="footer-newsletter-button">Prenumerera</button>
            </div>
          </div>
          
          <p className="footer-copyright">© 2024 Sekretesspolicy</p>
        </div>
        <div className="contact-form-container">
          <h2>Skicka ett meddelande</h2>
          <form className="contact-form">
            <div className="form-group">
              <input type="text" placeholder="Ditt namn" className="form-control" required />
            </div>
            <div className="form-group">
              <input type="email" placeholder="Din e-postadress" className="form-control" required />
            </div>
            <div className="form-group">
              <textarea placeholder="Ditt meddelande" className="form-control" rows="4" required></textarea>
            </div>
            <button type="submit" className="submit-button">SKICKA</button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default KontaktaOss