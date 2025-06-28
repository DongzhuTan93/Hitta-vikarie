export const createErrorMessage = (companyname, password) => {
  if (!companyname || !password) {
    return "Användarnamn och lösenord krävs!"
  } else {
    return false
  }
}

export const formatDisplayName = (name) => {
  if (!name) return '';
  
  return name
    .split(' ')
    .map(word => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
    .join(' ');
}

// GDPR and Cookie Consent Utilities
export const setCookieConsent = (accepted) => {
  try {
    localStorage.setItem('cookiesAccepted', accepted ? 'true' : 'false')
    localStorage.setItem('cookieConsentDate', new Date().toISOString())
  } catch (error) {
    console.warn('Could not save cookie consent:', error)
  }
}

export const getCookieConsent = () => {
  try {
    return localStorage.getItem('cookiesAccepted')
  } catch (error) {
    console.warn('Could not read cookie consent:', error)
    return null
  }
}

export const hasGivenCookieConsent = () => {
  const consent = getCookieConsent()
  return consent === 'true' || consent === 'false'
}

export const clearAllUserData = () => {
  try {
    // Clear all app-related data from localStorage
    const keysToKeep = ['cookiesAccepted', 'cookieConsentDate']
    const allKeys = Object.keys(localStorage)
    
    allKeys.forEach(key => {
      if (!keysToKeep.includes(key)) {
        localStorage.removeItem(key)
      }
    })
  } catch (error) {
    console.warn('Could not clear user data:', error)
  }
}

export const isValidEmail = (email) => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  return emailRegex.test(email)
}