import mongoose, { Schema, Types, model } from "mongoose";
const schema = new Schema(
  {
    attachments: {
      public_id: {
        type: String,
        required: true,
      },
      url: {
        type: string,
        required: true,
      },
    },
    sender: {
      type: Types.ObjectId,
      ref: "User",
      required: true,
    },
    chat: {
      type: Types.ObjectId,
      ref: "User",
      required: true,
    },
  },
  {
    timestamps: true,
  },
);

//export
export const Message = mongoose.models || model("Message", schema);
