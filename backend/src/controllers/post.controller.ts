import { PostModel } from "@/mongodb/post";
import { create } from "@/packages/post.package";
import { HttpStatusCode } from "axios";
import { Request, Response } from "express";

export const listPosts = async (
  request: Request,
  response: Response
): Promise<void> => {
  try {
    response.status(HttpStatusCode.Ok).json(await PostModel.find());
  } catch (error: any) {
    response.status(HttpStatusCode.BadRequest).json({
      message: error.message,
    });
  }
};

export const createPost = async (
  request: Request,
  response: Response
): Promise<void> => {
  try {
    create(request.body).then((post) => {
      response.status(HttpStatusCode.Ok).json(post);
    });
  } catch (error: any) {
    response.status(HttpStatusCode.BadRequest).json({
      message: error.message,
    });
  }
};

export const editPost = async (
  request: Request,
  response: Response
): Promise<void> => {
  // TODO: Implement post editing
};

export const deletePost = async (
  request: Request,
  response: Response
): Promise<void> => {
  // TODO: Implement post deletion
};
