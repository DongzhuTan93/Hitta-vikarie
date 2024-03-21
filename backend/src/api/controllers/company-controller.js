/**
 * Module for the account controller.
 *
 * @author Dongzhu Tan
 * @version 2.0.0
 */

import { Company } from '../models/company.js'
import createError from 'http-errors'
import jwt from 'jsonwebtoken'

/**
 * Encapsulates a controller.
 */
export class CompanyController {
  /**
   * Show all companies.
   *
   * @param {object} req - Express request object.
   * @param {object} res - Express response object.
   * @param {Function} next - Express next middleware function.
   */
  async showAllCompanies (req, res, next) {
    try {
      const allCompanies = await Company.find()

      res.status(200).json(allCompanies)
    } catch (error) {
      console.log(error)
      const err = new Error('Internal Server Error')
      err.status = 500
      next(err)
    }
  }

  /**
   * Creat a new company.
   *
   * @param {object} req - Express request object.
   * @param {object} res - Express response object.
   * @param {Function} next - Express next middleware function.
   */
  async companyRegister (req, res, next) {
    try {
      console.log(req.body)
      const result = new Company({
        companyname: req.body.companyname,
        companyEmail: req.body.companyEmail,
        password: req.body.password
      })

      await result.save()

      res.status(200).json({ message: 'Företaget skapades! Logga in med dina uppgifter.' })
    } catch (error) {
      console.log(error)
      const err = new Error('Internal Server Error')
      err.status = 500
      next(err)
    }
  }

  /**
   * Authenticates a company.
   *
   * @param {object} req - Express request object.
   * @param {object} res - Express response object.
   * @param {Function} next - Express next middleware function.
   */
  async companyLogin (req, res, next) {
    try {
      const company = await Company.authenticate(req.body.companyname, req.body.password)

      const payload = {
        companyname: company.companyname,
        password: company.password
      }

      // Create the access token with the shorter lifespan.
      const accessToken = jwt.sign(payload, process.env.ACCESS_TOKEN_SECRET, {
        algorithm: 'HS256',
        expiresIn: process.env.ACCESS_TOKEN_LIFE
      })

      // Set the JWT token as an HttpOnly cookie
      res.cookie('jwtToken', accessToken, {
        httpOnly: true,
        secure: true, // Enable this if using HTTPS in production
        sameSite: 'strict' // Adjust based on your requirements
      })

      res.status(201).json({ message: 'Företagslogin lyckades' }) // I got inspration from ChatGPT
    } catch (error) {
      // Authentication failed.
      const err = createError(401)
      err.cause = error
      next(err)
    }
  }
}
