import { AxiosResponse } from "axios";
import axiosInstance from "../configuration/axios.configuration";
import { Post } from "../entities/post.entity";
import { ApiEndpointRoutes } from "../enums/api-endpoint.enum";
import { CreatePostFormData } from "@/app/(default)/posts/create/types";

export function getEndpointRouteName(): string {
  return `${ApiEndpointRoutes.BackendListPosts}`;
}

export async function getProductPosts(): Promise<AxiosResponse<Post[]>> {
  return axiosInstance.get(getEndpointRouteName()).catch((error: any) => {
    throw error;
  });
}

export async function createProductPost(
  data: CreatePostFormData
): Promise<AxiosResponse<Post>> {
  return axiosInstance
    .post(ApiEndpointRoutes.BackendListPosts, data)
    .catch((error: any) => {
      throw error;
    });
}

export async function updateProductPost(
  postId: number,
  data: CreatePostFormData
): Promise<AxiosResponse<Post>> {
  return axiosInstance
    .patch(`${getEndpointRouteName()}/${postId}`, data)
    .catch((error: any) => {
      throw error;
    });
}

export async function deleteProductPost(
  postId: number
): Promise<AxiosResponse<void>> {
  return axiosInstance
    .delete(`${getEndpointRouteName()}/${postId}`)
    .catch((error: any) => {
      throw error;
    });
}
