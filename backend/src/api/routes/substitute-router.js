/**
 * Substitute routes.
 *
 * @author Dongzhu Tan
 * @version 2.0.0
 */

import express from 'express'
import { SubstituteController } from '../controllers/substitute-controller.js'

export const router = express.Router()

const controller = new SubstituteController()

router.get('/get-all-substitutes', (req, res, next) => controller.showAllSubstitutes(req, res, next))

router.post('/substitute-login', (req, res, next) => controller.SubstituteLogin(req, res, next))

router.post('/substitute-register', (req, res, next) => controller.SubstituteRegister(req, res, next))
