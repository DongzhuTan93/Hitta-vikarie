import mongoose from 'mongoose'
import { createRequire } from 'module'
const require = createRequire(import.meta.url)
const bcrypt = require('bcryptjs')

/**
 * Mongoose model company.
 *
 * @author Dongzhu Tan
 * @version 2.0.0
 */

// Create a schema.
const schema = new mongoose.Schema({
  companyname: {
    type: String,
    required: [true, 'Companyname is required.'],
    unique: true
    // - A valid companyname should start with an alphabet so, [A-Za-z].
    // - All other characters can be alphabets, numbers, an underscore, space, or 'ö', 'ä', 'å' (assuming you want to allow these characters).
    // - Since length constraint is 3-256 and we had already fixed the first character, so we give {2, 255}.
    // - We use ^ and $ to specify the beginning and end of matching.
    // match: [/^[A-Za-zöäåÖÄÅ][A-Za-z0-9_öäåÖÄÅ -]{2,255}$/, 'Please provide a valid company name']
  },
  companyEmail: {
    type: String,
    required: [true, 'Company email is required.'],
    unique: true,
    match: [/^[^\s@]+@[^\s@]+\.[^\s@]+$/, 'Please provide a valid emailadress']
  },
  password: {
    type: String,
    minLength: [10, 'The password must be of minimum length 10 characters.'],
    maxLength: [256, 'The password must be of maximum length 256 characters.'],
    required: [true, 'Password is required.']
  },
  permissionLevel: Number
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
 * Authenticates a company.
 *
 * @param {string} companyname - ...
 * @param {string} password - ...
 * @returns {Promise<Company>} ...
 */
schema.statics.authenticate = async function (companyname, password) {
  const company = await this.findOne({ companyname })

  // If no company found or password is wrong, throw an error.
  if (!company || !(await bcrypt.compare(password, company?.password))) {
    throw new Error('Invalid credentials.')
  }

  // Company found and password correct, return the company.
  return company
}

// Create a model using the schema.
export const Company = mongoose.model('Company', schema)

// I got inspiration here: https://gitlab.lnu.se/1dv026/student/dt222ha/exercises/example-restful-tasks-with-jwt
