/**
 * The starting point of the application.
 *
 * @author Dongzhu Tan
 * @version 2.0.0
 */

import express from 'express'
import logger from 'morgan'
import { dirname, join } from 'path'
import { fileURLToPath } from 'url'
import { router } from './api/routes/router.js'
import { connectDB } from './config/mongoose.js'
import helmet from 'helmet'
import dotenv from 'dotenv'
import cors from 'cors'
import cookieParser from 'cookie-parser'

dotenv.config()

try {
  // Connect to MongoDB.
  await connectDB()

  // Creates an Express application.
  const app = express()

  // Allow requests from frontend with credentials
  const corsOptions = {
    origin: process.env.FRONTEND_URL,
    credentials: true
  }

  app.use(cors(corsOptions))

  // Set various HTTP headers to make the application little more secure (https://www.npmjs.com/package/helmet).
  // I got an future explanation from ChatGPT: https://chat.openai.com/chat
  // This will enable the default security middleware provided by Helmet, including the x-xss-protection header, which tells the browser to enable its built-in XSS protection feature.
  app.use(
    helmet({
      crossOriginEmbedderPolicy: { policy: 'require-corp' },
      crossOriginOpenerPolicy: { policy: 'same-origin' },
      contentSecurityPolicy: {
        directives: {
          ...helmet.contentSecurityPolicy.getDefaultDirectives(),
          'img-src': ["'self'", 'gitlab.lnu.se', 'secure.gravatar.com']
        }
      }
    })
  ) // I got inspiration from ChatGPT

  // Get the directory name of this module's path.
  const directoryFullName = dirname(fileURLToPath(import.meta.url))

  // Set the base URL to use for all relative URLs in a document.
  const baseURL = process.env.BASE_URL || '/'

  // Set up a morgan logger using the dev format for log entries.
  app.use(logger('dev'))

  // Use the cookie-parser middleware
  app.use(cookieParser())

  // Parse requests of the content type application/x-www-form-urlencoded.
  // Populates the request object with a body object (req.body).
  app.use(express.urlencoded({ extended: false }))

  // --------------------------------------------------------------------------
  //
  // Webhook: Parse incoming requests with JSON payloads (application/json).
  // Populates the request object with a body object (req.body).
  //
  app.use(express.json())
  // --------------------------------------------------------------------------

  // Serve static files.
  app.use(express.static(join(directoryFullName, '..', 'public')))

  if (app.get('env') === 'production') {
    app.set('trust proxy', 1) // trust first proxy
  }

  // Middleware to be executed before the routes.
  app.use((req, res, next) => {
    // Pass the base URL to the views.
    res.locals.baseURL = baseURL

    next()
  })

  // Register routes.
  app.use(process.env.BASE_URL, router)

  // Error handler.
  app.use(function (err, req, res, next) {
    console.log(err)
    // 404 Not Found.
    if (err.status === 404) {
      return res
        .status(404)
        .json({ error: 'Sorry an error happened' })
    }

    // 500 Internal Server Error (in production, all other errors send this response).
    if (req.app.get('env') !== 'development') {
      return res
        .status(500)
        .json({ error: 'Sorry an error happened' })
    }

    // Development only!
    // Only providing detailed error in development.

    console.log(err)

    // Render the error page.
    res
      .status(err.status || 500)
      .json({ error: err })
  })

  // --------------------------------------------------------------------------
  // Starts the HTTP server listening for connections.
  // Socket.IO: Call .listen on the server, not the app.
  //
  app.listen(process.env.PORT, () => {
    console.log(`Server running at http://localhost:${process.env.PORT}`)
    console.log('Press Ctrl-C to terminate...')
  })
} catch (err) {
  console.error(err)
  process.exitCode = 1
}
