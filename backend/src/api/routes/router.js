/**
 * The routes.
 *
 * @author Dongzhu Tan
 * @version 2.0.0
 */

import express from 'express'
import { router as substituteRouter } from './substitute-router.js'
import { router as companyRouter } from './company-router.js'
import { router as SubstituteOccupationsController } from './substitute-occupations-router.js'
export const router = express.Router()

router.use('/substitute', substituteRouter)
router.use('/company', companyRouter)
router.use('/substitute-occupation', SubstituteOccupationsController)

// Test
router.use('*', (req, res, next) => {
  const error = new Error('Not Found')
  error.status = 404
  next(error)
})
