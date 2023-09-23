import { IThread } from "@/types/schema";
import { Document, Schema, model, models } from "mongoose";

const ThreadSchema: Schema = new Schema({
  text: {
    type: String,
    required: true,
  },

  author: {
    type: Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },

  community: {
    type: Schema.Types.ObjectId,
    ref: "Community",
  },

  createdAt: {
    type: Date,
    default: Date.now,
  },

  parentId: {
    type: String,
  },

  children: [
    {
      type: Schema.Types.ObjectId,
      ref: "Thread",
    },
  ],
});

export type IThreadSchema = Document & IThread;

export default models.Thread || model<IThreadSchema>("Thread", ThreadSchema);
