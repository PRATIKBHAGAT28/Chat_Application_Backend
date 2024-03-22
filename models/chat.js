import { Schema, Types, model } from "mongoose";
const schema = new Schema(
  {
    name: {
      type: String,
      required: true,
    },
    groupChat: {
      type: Boolean,
      default: false,
    },
    creator: {
      type: Types.ObjectId,
      ref: "User",
    },
    avatar: {
      public_id: {
        type: String,
        required: true,
      },
      url: {
        type: string,
        required: true,
      },
    },
  },
  {
    timestamps: true,
  },
);

//export
export const User = models.User || model("User", schema);
