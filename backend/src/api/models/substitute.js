/**
 * Mongoose model substitute.
 *
 * @author Dongzhu Tan
 * @version 2.0.0
 */

import mongoose from 'mongoose'
import { createRequire } from 'module'
const require = createRequire(import.meta.url)
const bcrypt = require('bcryptjs')

// Create a schema.
const schema = new mongoose.Schema({
  substitutename: {
    type: String,
    required: [true, 'substitutename is required.'],
    unique: true
    // - A valid substitutename should start with an alphabet so, [A-Za-z].
    // - All other characters can be alphabets, numbers, an underscore, space, or 'ö', 'ä', 'å' (assuming you want to allow these characters).
    // - Since length constraint is 3-256 and we had already fixed the first character, so we give {2, 255}.
    // - We use ^ and $ to specify the beginning and end of matching.
    // match: [/^[A-Za-zöäåÖÄÅ][A-Za-z0-9_öäåÖÄÅ -]{2,255}$/, 'Please provide a valid substitutename']
  },
  substituteEmail: {
    type: String,
    required: [true, 'substitute email is required.'],
    unique: true,
    match: [/^[^\s@]+@[^\s@]+\.[^\s@]+$/, 'Please provide a valid emailadress']
  },
  password: {
    type: String,
    minLength: [10, 'The password must be of minimum length 10 characters.'],
    maxLength: [256, 'The password must be of maximum length 256 characters.'],
    required: [true, 'Password is required.']
  }
}, {
  timestamps: true,
  toJSON: {
    /**
     * Performs a transformation of the resulting object to remove sensitive information.
     *
     * @param {object} doc - The mongoose document which is being converted.
     * @param {object} ret - The plain object representation which has been converted.
     */
    transform: function (doc, ret) {
      delete ret._id
      delete ret.__v
    },
    virtuals: true // ensure virtual fields are serialized
  }
})

schema.virtual('id').get(function () {
  return this._id.toHexString()
})

// Salts and hashes password before save.
schema.pre('save', async function () {
  this.password = await bcrypt.hash(this.password, 10)
})

/**
 * Authenticates a substitute.
 *
 * @param {string} substitutename - ...
 * @param {string} password - ...
 * @returns {Promise<Substitute>} ...
 */
schema.statics.authenticate = async function (substitutename, password) {
  const substitute = await this.findOne({ substitutename })

  // If no substitute found or password is wrong, throw an error.
  if (!substitute || !(await bcrypt.compare(password, substitute?.password))) {
    throw new Error('Invalid credentials.')
  }

  // substitute found and password correct, return the substitute.
  return substitute
}

// Create a model using the schema.
export const Substitute = mongoose.model('Substitute', schema)

// I got inspiration here: https://gitlab.lnu.se/1dv026/student/dt222ha/exercises/example-restful-tasks-with-jwt
