import {
  createPost,
  deletePost,
  editPost,
  listPosts,
} from "@/controllers/post.controller";
import { Router } from "express";

const postsRouter = Router();

postsRouter.get("/", listPosts);
postsRouter.post("/", createPost);
postsRouter.patch("/", editPost);
postsRouter.delete("/", deletePost);

export default postsRouter;
