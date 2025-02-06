"use client";

import { PrimaryButton } from "@/components/buttons/primary";
import { TextInput } from "@/components/form/inputs/text";
import { Header } from "@/components/header";
import {
  dispatchErrorToastMessage,
  dispatchSuccessToastMessage,
} from "@/lib/configuration/toast.configuration";
import { Post } from "@/lib/entities/post.entity";
import { AppRoutes } from "@/lib/enums/app-route.enum";
import { FieldNames } from "@/lib/enums/field-name.enum";
import { QueryTypes } from "@/lib/enums/react-query.enum";
import { useCreateOrUpdateProductPost } from "@/lib/queries/post.query";
import { QueryClient, useQueryClient } from "@tanstack/react-query";
import { FormikProps, useFormik } from "formik";
import { useRouter } from "next/navigation";
import { CreatePostYupFormSchema } from "./schema.yup";
import { CreatePostFormData } from "./types";

import { useSearchParams } from "next/navigation";
import { useEffect } from "react";

export default function CreatePostPage() {
  const { mutateAsync: createOrUpdatePost } = useCreateOrUpdateProductPost();
  const queryClient: QueryClient = useQueryClient();

  const router = useRouter();

  const searchParams = useSearchParams();
  const postId: number | undefined = searchParams.get("postId")
    ? Number(searchParams.get("postId"))
    : undefined;
  const postName: string | undefined =
    searchParams.get("postName") ?? undefined;

  const initialValues: CreatePostFormData = {
    [FieldNames.Title]: "",
  };

  const formik: FormikProps<CreatePostFormData> = useFormik<CreatePostFormData>(
    {
      initialValues,
      onSubmit: handleSubmit,
      validationSchema: CreatePostYupFormSchema,
      validateOnChange: false,
      validateOnBlur: true,
    }
  );

  /**
   * @returns {Promise<void>}
   */
  async function handleSubmit(data: CreatePostFormData): Promise<void> {
    await createOrUpdatePost(
      { data: data as Post, postId },
      {
        onSuccess: ({ data }, { postId }) => {
          const queryKey = [QueryTypes.Posts];

          if (postId) {
            queryClient.setQueryData(queryKey, (oldData?: Post[]) => {
              return oldData?.map((post) => (post.id === postId ? data : post));
            });
          } else {
            queryClient.setQueryData(queryKey, (oldData?: Post[]) => {
              return [...(oldData ?? []), data];
            });
          }

          dispatchSuccessToastMessage(
            `Post ${postId ? "atualizado" : "criado"} com sucesso!`
          );

          router.push(AppRoutes.Posts);
        },
        onError: (err: any, { postId }) => {
          dispatchErrorToastMessage(
            `Erro ao tentar ${postId ? "atualizar" : "criar"} a post!`
          );
          console.error(err.message);
        },
      }
    );
  }

  useEffect(() => {
    if (postName) {
      formik.setFieldValue(FieldNames.Title, postName);
    }
  }, []);

  return (
    <>
      <Header title={postId ? "Editar post" : "Novo post"} />

      <div className="bg-white dark:bg-slate-800 px-8 py-8 border-t border-slate-200 dark:border-slate-700">
        <form autoComplete="off" onSubmit={formik.handleSubmit} noValidate>
          <div className="grid gap-5">
            <TextInput
              label={"Nome da post"}
              id={FieldNames.Title}
              name={FieldNames.Title}
              value={formik.values[FieldNames.Title]}
              onChange={formik.handleChange(FieldNames.Title)}
              required={true}
              disabled={formik.isSubmitting}
              type={"text"}
              error={formik.errors[FieldNames.Title]}
            />
          </div>

          {/* TODO: add a body field to the posts */}

          <div className="flex justify-end pt-8">
            <PrimaryButton
              title={postId ? "Salvar" : "Adicionar"}
              type="submit"
            />
          </div>
        </form>
      </div>
    </>
  );
}
