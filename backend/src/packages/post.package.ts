import { createPostInDb } from "@/services/post.service";

const handleIdFieldInPost = (returnedPost: any) => {
  returnedPost = {
    id: `${returnedPost._id}`,
    title: returnedPost.title,
  };
  delete returnedPost._id;
  return returnedPost;
};

export const create = (data: any) => {
  return new Promise((resolve, reject) => {
    const returned = createPostInDb(data)
      .then((returned: any) => {
        const cleanReturn = handleIdFieldInPost(returned);
        console.log(cleanReturn);
        resolve(cleanReturn);
      })
      .catch((error: any) => {
        reject(error);
      });
  });
};
