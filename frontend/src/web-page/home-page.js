import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css'
import homePageVideo from '../public/homepage-video.mp4'
import GDPRConsent from './gdpr-consent'

function Home() {
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

  return (
    <>
      <GDPRConsent />
      <div className="container-fluid p-0 main-container" style={{ 
        margin: "0", 
        padding: "0",
        overflow: "hidden",
        minHeight: `calc(100vh - ${navbarHeight}px)`,
        maxHeight: `calc(100vh - ${navbarHeight}px)`
      }}>
        <div className="row g-0" style={{ 
          minHeight: `calc(100vh - ${navbarHeight}px)`, 
          maxHeight: `calc(100vh - ${navbarHeight}px)`,
          margin: 0,
          padding: 0
        }}>
          <div className="col-12 p-0" style={{ 
            height: `calc(100vh - ${navbarHeight}px)`, 
            position: 'relative',
            margin: 0,
            padding: 0
          }}>
            {/* Video Background */}
            <video
              autoPlay
              muted
              loop
              playsInline
              style={{
                position: 'absolute',
                top: 0,
                left: 0,
                width: '100%',
                height: '100%',
                objectFit: 'cover',
                zIndex: -1
              }}
            >
              <source src={homePageVideo} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
            
            <div className="overlay d-flex align-items-center justify-content-center" style={{ 
              position: 'absolute', 
              top: 0, 
              left: 0, 
              width: '100%', 
              height: '100%',
              backgroundColor: 'rgba(0, 0, 0, 0.4)', // Add slight overlay for better text readability
              margin: 0,
              padding: 0
            }}>
              <div className="wrapper text-center text-white">
                <h2 className="mb-2">En perfekt mötesplats!</h2>
                <h1 className="mb-4">Tillsammans slutför vi denna kompletta pusselbit.</h1>
                <div className="button-container d-flex justify-content-center gap-5">
                  <Link to='/companyAccount' className="btn btn-danger px-4 py-3">Hitta vikarie</Link>
                  <Link to='/substituteAccount' className="btn btn-danger px-4 py-3">Bli vikarie</Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

    </>
  )
}

export default Home
