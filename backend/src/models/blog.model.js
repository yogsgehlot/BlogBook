import mongoose, { Schema } from "mongoose";

const blogSchema = new Schema(
  {
    title: {
      type: String,
      required: true,
    },
    owner: {
      type: Schema.Types.ObjectId,
      ref: "User",
    },
    content: {
      type: String,
      required: true,
    },
    isActive: {
      type: Boolean,
      default: true,
    },
    coverImage: {
      type: String, //cloudinary
      required: true,
    },
  },
  { timestamps: true }
);

export const Blog = mongoose.model("Blog", blogSchema);
