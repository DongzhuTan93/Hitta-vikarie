/**
 * Module for the account controller.
 *
 * @author Dongzhu Tan
 * @version 2.0.0
 */

import { Substitute } from '../models/substitute.js'
import createError from 'http-errors'
import jwt from 'jsonwebtoken'

/**
 * Encapsulates a controller.
 */
export class SubstituteController {
  /**
   * Show all substitutes.
   *
   * @param {object} req - Express request object.
   * @param {object} res - Express response object.
   * @param {Function} next - Express next middleware function.
   */
  async showAllSubstitutes (req, res, next) {
    try {
      const allsubstitutes = await Substitute.find()

      res.status(200).json(allsubstitutes)
    } catch (error) {
      console.log(error)
      const err = new Error('Internal Server Error')
      err.status = 500
      next(err)
    }
  }

  /**
   * Creat a new substitute.
   *
   * @param {object} req - Express request object.
   * @param {object} res - Express response object.
   * @param {Function} next - Express next middleware function.
   */
  async SubstituteRegister (req, res, next) {
    try {
      console.log('Created substitute__________________start:')
      console.log(req.body)
      const substitute = new Substitute({
        substitutename: req.body.substitutename,
        substituteEmail: req.body.substituteEmail,
        occupation: req.body.occupation,
        freetime: req.body.freetime,
        password: req.body.password
      })
      console.log('Created substitute__________________finish:')

      await substitute.save()

      res.status(200).json({ message: 'Användaren skapades! Logga in med dina uppgifter.' })
    } catch (error) {
      console.log(error)
      const err = new Error('Internal Server Error')
      err.status = 500
      next(err)
    }
  }

  /**
   * Authenticates a substitute.
   *
   * @param {object} req - Express request object.
   * @param {object} res - Express response object.
   * @param {Function} next - Express next middleware function.
   */
  async SubstituteLogin (req, res, next) {
    try {
      const substitute = await Substitute.authenticate(req.body.substitutename, req.body.password)

      const payload = {
        substitutename: substitute.substitutename,
        password: substitute.password
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

      // Include the necessary substitute information in the response
      res.status(201).json({ message: 'Användarinloggning lyckades' })
    } catch (error) {
      // Authentication failed.
      const err = createError(401)
      err.cause = error

      next(err)
    }
  }
}
