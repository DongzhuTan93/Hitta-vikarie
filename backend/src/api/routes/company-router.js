/**
 * Company routes.
 *
 * @author Dongzhu Tan
 * @version 2.0.0
 */

import express from 'express'
import { CompanyController } from '../controllers/company-controller.js'

export const router = express.Router()

const controller = new CompanyController()

router.get('/show-all-companies', (req, res, next) => controller.showAllCompanies(req, res, next))

router.post('/company-login', (req, res, next) => controller.companyLogin(req, res, next))

router.post('/company-register', (req, res, next) => controller.companyRegister(req, res, next))
