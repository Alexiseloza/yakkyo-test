import { Schema, model } from 'mongoose'
// Mongo Schema
const UserSchema = new Schema({
  userId: { type: String, required: true },
  email: { type: String, lowercase: true, trim: true, required: true, unique: true },
  password: { type: String, required: true, select: false },
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
})

export default model('User', UserSchema)
