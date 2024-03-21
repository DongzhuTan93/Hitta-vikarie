/**
 * Module for the occupations controller.
 *
 * @author Dongzhu Tan
 * @version 2.0.0
 */

import { Occupation } from '../models/substitute-occupations.js'

/**
 * Encapsulates a controller.
 */
export class OccupationsController {
  /**
   * Displays a list of occupations.
   *
   * @param {object} req - Express request object.
   * @param {object} res - Express response object.
   * @param {Function} next - Express next middleware function.
   */
  async showAllOccupations (req, res, next) {
    try {
      const viewData = {
        occupations: (await Occupation.find())
          .map(occupation => occupation.toObject())
      }

      res.status(200).json(viewData)
    } catch (error) {
      next(error)
    }
  }

  /**
   * Creates a new occupation.
   *
   * @param {object} req - Express request object.
   * @param {object} res - Express response object.
   * @param {Function} next - Express next middleware function.
   */
  async createOccupation (req, res, next) {
    try {
      const loggedInUser = await req.session.user

      const occupation = new Occupation({
        occupation: req.body.occupation,
        availableTime: req.body.availableTime,
        creatorId: loggedInUser.userId
      })

      await occupation.save()
      res.status(200).json({ message: 'Nya möjligheter skapades!' })
    } catch (error) {
      next(error)
    }
  }

  /**
   * Updates a specific occupation.
   *
   * @param {object} req - Express request object.
   * @param {object} res - Express response object.
   * @param {Function} next - Express next middleware function.
   * @returns {void} - No return value, calls next with an error if the user does not have permission to update the occupations.
   */
  async updateOccupation (req, res, next) {
    try {
      const occupation = await Occupation.findById(req.params.id)

      const loggedInUser = await req.session.user
      if (!loggedInUser) {
        const error = new Error()
        error.status = 404
        return next(error)
      }

      if (occupation) {
        occupation.occupation = req.body.occupation

        await occupation.save()
        res.status(200).json({ message: 'The occupation was updated successfully!' })
      } else {
        req.session.flash = {
          type: 'danger',
          text: 'The occupation you attempted to update was removed by another user after you got the original values.'
        }
      }

      await occupation.save()
    } catch (error) {
      next(error)
    }
  }

  /**
   * Deletes the specified occupation.
   *
   * @param {object} req - Express request object.
   * @param {object} res - Express response object.
   * @param {Function} next - Express next middleware function.
   * @returns {void} - No return value, calls next with an error if the user does not have permission to delete the occupations.
   */
  async deleteOccupation (req, res, next) {
    try {
      const occupation = await Occupation.findById(req.params.id)
      const loggedInUser = await req.session.user

      if (!loggedInUser) {
        const error = new Error()
        error.status = 404
        return next(error)
      }

      if (loggedInUser.userId !== occupation.creatorId) {
        const error = new Error()
        error.status = 403
        return next(error)
      }

      await Occupation.findByIdAndDelete(req.body.id)

      res.status(200).json({ message: 'The occupation was deleted successfully.' })
    } catch (error) {
      next(error)
    }
  }
}
