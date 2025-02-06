import { PostModel } from "@/mongodb/post";
import { CreationDataInterface } from "./types";

const checkFields = (data: any) => {
  return new Promise((resolve, reject) => {
    if (!data.title) {
      reject(new Error("Title is required"));
    }
  });
};

export const createPostInDb = async (data: any) => {
  checkFields(data).catch((error) => {
    throw new Error(error.message);
  });

  const creationData: CreationDataInterface = {
    title: data.title,
  };

  const queryPromise = PostModel.create(creationData);
  const post = await queryPromise;

  return post;
};
