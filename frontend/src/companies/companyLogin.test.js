import React from "react"
import { render, fireEvent, screen } from "@testing-library/react"
import '@testing-library/jest-dom'
import CompanyLogin from "./company-login"
import * as utils from "../utils/utils"

// Mock the createErrorMessage function
jest.mock("../utils/utils", () => ({
  createErrorMessage: jest.fn()
})) 

describe("CompanyLogin", () => {
  test("createErrorMessage is called when login button is clicked with empty fields", () => {
    // Set up the component
    render(<CompanyLogin onCompanyLogin={() => {}} />)
    
    // Provide a mock return value for createErrorMessage
    utils.createErrorMessage.mockReturnValue("Användarnamn och lösenord krävs!")

    // Leave 'Användarnamn' field empty and fill in 'lösenord'
    fireEvent.change(screen.getByPlaceholderText(/Användarnamn/i), { target: { value: "" } })
    fireEvent.change(screen.getByPlaceholderText(/Lösenord med minsta längd 10 tecken./i), { target: { value: "password123" } })

    // Simulate button click
    fireEvent.click(screen.getByText(/login/i))

    // Assert createErrorMessage was called with empty 'Användarnamn'
    expect(utils.createErrorMessage).toHaveBeenCalledWith("", "password123")
  }) // I got inspiration: https://testing-library.com/docs/ecosystem-jest-dom/
})
