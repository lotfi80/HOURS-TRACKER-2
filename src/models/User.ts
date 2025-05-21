import mongoose from "mongoose";

import { Document, Model, model, Schema } from "mongoose";

export interface IUser extends Document {
  username: string;
  firstname: string;
  lastname: string;
  email: string;
  hash: string;
}
const UserSchema: Schema<IUser> = new Schema({
  username: {
    type: String,
    required: true,
    unique: true,
  },
  firstname: {
    type: String,
    required: true,
  },
  lastname: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  hash: {
    type: String,
    required: true,
  },
});

export const User = mongoose.model<IUser>("User", UserSchema);
