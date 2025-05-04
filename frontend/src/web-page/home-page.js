import React from 'react'
import { Link } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css'
import videoSource from '../public/homepage-video.mp4'


function Home() {
  return (
    <div className="App">
      <header className="App-header">
        <div className="video-container">
          <video autoPlay loop muted>
            <source src={videoSource} type="video/mp4" />
          </video>
          <div className="overlay">
            <div className="wrapper">
              <h2>En perfekt mötesplats!</h2>
              <h1>Tillsammans slutför vi denna kompletta pusselbit.</h1>
              <div className="button-container">
                <Link to='/companyAccount'>Hitta vikarie</Link>
                <Link to='/substituteAccount'>Bli vikarie</Link>
              </div>
            </div>
          </div>
        </div>
      </header>
    </div>
  )
}

export default Home
