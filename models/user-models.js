import mongoose, {Schema} from "mongoose";

// Define the schema for the user model
const userSchema = new Schema({
  firstName: {
    type: String,
    required: true
  },
  lastName: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true,
    unique: true
  },
  password: {
    type: String,
    required: true
  },
  favourites: [String] 
});

// Create the user model using the schema
export const userModel =  mongoose.models.users ?? mongoose.model('users', userSchema);


