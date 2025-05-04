import React, { useState } from 'react'
import Home from './web-page/home-page'
import './public/App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import AboutUs from './web-page/about-us'
import SubstituteAccountHandle from './substitute/substituteAccount'
import SubstituteProfilePage from './substitute/substituteProfile'
import NavigationBar from './web-page/navigation-bar'
import CompanyAccountHandle from './companies/companyAccount'
import CompanyProfilePage from './companies/companyProfile'
import AllAccountLogin from './web-page/navigation-bar-login'
import ShowAllSubstitute from './substitute/showAllSubstitute'
import ShowCompanies from './companies/showAllCompanies'
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
        isLoggedIn={isLoggedIn} 
        isCompanyLoggedIn={isCompanyLoggedIn} 
      />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/om-mig" element={<AboutUs />} />
        <Route path="/om-oss" element={<AboutUs />} />
        <Route path="/showAllSubstitute" element={<ShowAllSubstitute  onLogout={handleSubstituteLogout} onCompanyLogout={handleCompanyLogout}/>} />
        <Route path="/showCompanies" element={<ShowCompanies onCompanyLogout={handleCompanyLogout} onLogout={handleSubstituteLogout}/>} />
        <Route path="/substituteAccount" element={<SubstituteAccountHandle onSubstituteLogin={ handleSubstituteLogin } onSubstituteRegister={ handleSubstituteLogin }/>} />
        <Route path="/companyAccount" element={<CompanyAccountHandle  onCompanyLogin={ handleCompanyLogin } onCompanyRegister={ handleCompanyLogin } />} />
        <Route path="/allAccount-login" element={<AllAccountLogin  onCompanyLogin={ handleCompanyLogin }  onSubstituteLogin={ handleSubstituteLogin } />}/>
        <Route path="/substituteProfile" element={<SubstituteProfilePage onLogout={handleSubstituteLogout} />}/>
        <Route path="/companyProfile" element={<CompanyProfilePage onCompanyLogout={handleCompanyLogout}/>}/>
        <Route path="/SubstituteNewOpportunities" element={<SubstituteNewOpportunities onSubstituteLogin={ handleSubstituteLogin }/>}/>
      </Routes>
    </Router>
  )
}

export default App

