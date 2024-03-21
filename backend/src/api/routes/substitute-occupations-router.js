/**
 * Substitute occupations router routes.
 *
 * @author Dongzhu Tan
 * @version 2.0.0
 */

import express from 'express'
import { OccupationsController } from '../controllers/substitute-occupations-controller.js'

export const router = express.Router()

const controller = new OccupationsController()

// Map HTTP verbs and route paths to controller action methods.

router.get('/', (req, res, next) => controller.showAllOccupations(req, res, next))

router.post('/create', (req, res, next) => controller.createOccupation(req, res, next))

router.post('/:id/update', (req, res, next) => controller.updateOccupation(req, res, next))

router.post('/:id/delete', (req, res, next) => controller.deleteOccupation(req, res, next))
