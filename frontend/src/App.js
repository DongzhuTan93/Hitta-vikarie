import React, { useState } from 'react'
import Home from './web-page/home-page'
import './public/App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import AboutUs from './web-page/about-us'
import ContactUs  from './web-page/contact-us'
import SubstituteAccountHandle from './substitute/substituteAccount-handle'
import SubstituteProfilePage from './substitute/substituteProfile-page'
import NavigationBar from './web-page/navigation-bar'
import CompanyAccountHandle from './companies/companyAccount-handle'
import CompanyProfilePage from './companies/companyProfile-page'
import AllAccountLogin from './web-page/navigation-bar-login'
import ShowAllSubstitute from './substitute/showAllSubstitute-page'
import ShowCompanies from './companies/showAllCompanies-page'
import SubstituteNewOpportunities from './substitute/substitute-new-opportunities' 


function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false)
  const [isCompanyLoggedIn, setCompanyLoggedIn] = useState(false)
  
  const handleSubstituteLogin = () => {
    console.log('handleSubstituteLogin')
    setIsLoggedIn(true)

  }

  const handleSubstituteLogout = () => {
    console.log('handleSubstituteLogout')
    setIsLoggedIn(false)
  }

  const handleCompanyLogin = () => {
    console.log('handleCompanyLogin')
    setCompanyLoggedIn(true)
  }

  const handleCompanyLogout = () => {
    console.log('handleCompanyLogout')
    setCompanyLoggedIn(false)
  }


  return (
    <Router>
      <NavigationBar 
        isLoggedIn={ isLoggedIn } 
        isCompanyLoggedIn={ isCompanyLoggedIn } 
      />
      <p>{console.log(isLoggedIn)}</p>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/om-oss" element={<AboutUs />} />
        <Route path="/kontakta-oss" element={<ContactUs />} />
        <Route path="/showAllSubstitute-page" element={<ShowAllSubstitute  onLogout={handleSubstituteLogout} onCompanyLogout={handleCompanyLogout}/>} />
        <Route path="/showCompanies" element={<ShowCompanies onCompanyLogout={handleCompanyLogout} onLogout={handleSubstituteLogout}/>} />
        <Route path="/substituteAccount-handle" element={<SubstituteAccountHandle onSubstituteLogin={ handleSubstituteLogin } onSubstituteRegister={ handleSubstituteLogin }/>} />
        <Route path="/companyAccount-handle" element={<CompanyAccountHandle  onCompanyLogin={ handleCompanyLogin } onCompanyRegister={ handleCompanyLogin } />} />
        <Route path="/allAccount-login" element={<AllAccountLogin  onCompanyLogin={ handleCompanyLogin }  onSubstituteLogin={ handleSubstituteLogin } />}/>
        <Route path="/substituteProfile-page" element={<SubstituteProfilePage onLogout={handleSubstituteLogout} />}/>
        <Route path="/companyProfile-page" element={<CompanyProfilePage onCompanyLogout={handleCompanyLogout}/>}/>
        <Route path="/SubstituteNewOpportunities" element={<SubstituteNewOpportunities onSubstituteLogin={ handleSubstituteLogin }/>}/>
      </Routes>
    </Router>
  )

}

export default App

