import React from 'react';
import SubstituteRegister from './substitute-register';
import registerVideo from '../public/homepage-video.mp4';

function SubstituteRegisterPage({ onSubstituteRegister }) {
  return (
    <div className="video-container">
      <video autoPlay loop muted>
        <source src={registerVideo} type="video/mp4" />
      </video>
      <div className='page-container-holder'>
        <div className="page-container">
          <div className="substitute-container">
            <div className="alert-container">
              <div className="login-distence">
                <SubstituteRegister onSubstituteRegister={onSubstituteRegister} />
              </div>
              <p>Har du redan ett konto? Klicka login </p>
              <a href="/substitute-login">
                <button type="button">Login</button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SubstituteRegisterPage; 