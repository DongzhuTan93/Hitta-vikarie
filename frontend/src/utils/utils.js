export const createErrorMessage = (companyname, password) => {
    if (!companyname || !password) {
      return "Användarnamn och lösenord krävs!"
    } else {
      return false
    }
  }