import mongoose from "mongoose";

const PostSchema = new mongoose.Schema({
  title: { type: String, require: false },
});

export const PostModel = mongoose.model("posts", PostSchema);
