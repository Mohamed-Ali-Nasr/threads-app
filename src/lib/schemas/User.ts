import { IUser } from "@/types/schema";
import { Document, Schema, model, models } from "mongoose";

const UserSchema: Schema = new Schema({
  id: {
    type: String,
    required: true,
  },

  username: {
    type: String,
    unique: true,
    required: true,
  },

  name: {
    type: String,
    required: true,
  },

  image: String,

  bio: String,

  threads: [
    {
      type: Schema.Types.ObjectId,
      ref: "Thread",
    },
  ],

  onboarded: {
    type: Boolean,
    default: false,
  },

  communities: [
    {
      type: Schema.Types.ObjectId,
      ref: "Community",
    },
  ],
});

export type IUserSchema = Document & IUser;

export default models.User || model<IUserSchema>("User", UserSchema);
