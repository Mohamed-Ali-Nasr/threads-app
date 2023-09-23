import { ICommunity } from "@/types/schema";
import { Document, Schema, model, models } from "mongoose";

const CommunitySchema: Schema = new Schema({
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

  createdBy: {
    type: Schema.Types.ObjectId,
    ref: "User",
  },

  threads: [
    {
      type: Schema.Types.ObjectId,
      ref: "Thread",
    },
  ],

  members: [
    {
      type: Schema.Types.ObjectId,
      ref: "User",
    },
  ],
});

export type ICommunitySchema = Document & ICommunity;

export default models.Community ||
  model<ICommunitySchema>("Community", CommunitySchema);
