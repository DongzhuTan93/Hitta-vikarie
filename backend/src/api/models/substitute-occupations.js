/**
 * Mongoose model occupation.
 *
 * @author Dongzhu Tan
 * @version 2.0.0
 */

import mongoose from 'mongoose'

const schema = new mongoose.Schema({
  occupation: {
    type: String,
    required: true,
    trim: true,
    minlength: 1
  },
  availableTime: {
    type: String,
    required: [true, 'Available time is required.']
  },
  creatorId: {
    type: String,
    required: true
  }
}, {
  timestamps: true,
  toObject: {
    virtuals: true, // ensure virtual fields are serialized
    /**
     * Performs a transformation of the resulting object to remove sensitive information.
     *
     * @param {object} doc - The mongoose document which is being converted.
     * @param {object} ret - The plain object representation which has been converted.
     */
    transform: function (doc, ret) {
      delete ret._id
      delete ret.__v
    }
  },

  toJSON: {
    /**
     * Performs a transformation of the resulting object to remove sensitive information.
     *
     * @param {object} doc - The mongoose document which is being converted.
     * @param {object} ret - The plain object representation which has been converted.
     */
    transform: function (doc, ret) {
      ret.id = ret._id
      delete ret._id
      delete ret.__v
    }
  }

})

schema.virtual('id').get(function () {
  return this._id.toHexString()
})

// Create a model using the schema.
export const Occupation = mongoose.model('occupation', schema)
