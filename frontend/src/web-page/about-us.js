import React from 'react'
import aboutUs from '../public/about-us.jpg'

function OmOss() {
  return (
    <div className='page-container-holder'>
      <div className="page-container">
        <img src={aboutUs} alt="About us" className="image" />
          <h2>Om Oss</h2>
          <p>Vi är engagerade i att skapa den enklaste och mest effektiva mötesplatsen för dig！</p>
        </div>
    </div>
  )
}

export default OmOss
