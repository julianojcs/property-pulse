import { Schema, model, models } from 'mongoose'

const UserSchema = new Schema(
  {
    username: {
      type: String,
      required: [true, 'Please provide a username']
    },
    email: {
      type: String,
      unique: [true, 'Email already exists'],
      required: [true, 'Please provide an email']
    },
    image: {
      type: String,
      default: 'no-photo.jpg'
    },
    bookmarks: {
      type: [Schema.Types.ObjectId],
      ref: 'Property'
    }
  },
  {
    timestamps: true
  }
)

const User = models.User || model('User', UserSchema)

export default User
