"use client";

import { IconButton } from "@/components/buttons/icon";
import { AddIcon, DeleteIcon, EditIcon } from "@/components/buttons/primary";
import { DangerDecision } from "@/components/decisions/danger";
import { Fetching } from "@/components/fetching";
import { Header } from "@/components/header";
import { Table } from "@/components/table";
import { Post } from "@/lib/entities/post.entity";
import { AppRoutes } from "@/lib/enums/app-route.enum";
import { ModalTypes } from "@/lib/enums/modal-type.enum";
import {
  useDeleteProductPost,
  useGetProductPosts,
} from "@/lib/queries/post.query";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { tableColumns } from "./constants";

// TODO: Fix this
// export const metadata = {
//   title: "Posts",
//   description: "Your posts are here!",
// };

export default function Posts() {
  const router = useRouter();

  const { mutateAsync: deletePost } = useDeleteProductPost();
  const { isLoading, data } = useGetProductPosts();
  const posts: Post[] = data ?? [];

  const [selectedItemId, setSelectedItemId] = useState<number>();
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

  async function handlePostDelete(): Promise<void> {
    if (selectedItemId) {
      try {
        await deletePost(selectedItemId);

        setIsModalOpen(false);
      } catch (error) {
        console.error("Erro ao deletar a post", error);
      }
    }
  }

  function onCreateClick(): void {
    router.push(AppRoutes.CreatePost);
  }

  function onUpdateClick(state: { postId: number; postName: string }): void {
    router.push(
      `${AppRoutes.CreatePost}?postId=${state.postId}&postName=${state.postName}`
    );
  }

  function onDeleteClick(postId: number): void {
    setIsModalOpen(true);
    setSelectedItemId(postId);
  }

  return (
    <>
      <Header
        title="Posts"
        endActions={{
          buttonProps: {
            startIcon: <AddIcon />,
            title: "Criar post",
            type: "button",
            onClick: onCreateClick,
          },
        }}
      />

      {isLoading ? (
        <Fetching title="Carregando Posts" />
      ) : (
        <Table
          title={"Posts"}
          itemsLength={posts.length}
          enableActions
          items={posts.map((post) => ({
            id: String(post.id),
            title: post.title,
            actions: (
              <>
                <IconButton
                  title={"Editar"}
                  icon={<EditIcon />}
                  type={"button"}
                  onClick={() =>
                    onUpdateClick({
                      postId: post.id,
                      postName: post.title,
                    })
                  }
                />
                <IconButton
                  className="text-rose-500 hover:text-rose-600 rounded-full"
                  title={"Deletar"}
                  icon={<DeleteIcon />}
                  type={"button"}
                  aria-controls={ModalTypes.Danger}
                  onClick={(e: { stopPropagation: () => void }) => {
                    e.stopPropagation();
                    onDeleteClick(post.id);
                  }}
                />
              </>
            ),
          }))}
          columns={tableColumns}
        />
      )}
      <DangerDecision
        modalOpen={isModalOpen}
        setModalOpen={setIsModalOpen}
        title={"Deletar 1 item?"}
        description="Quer realmente excluir o item?"
        cancelTitle="Cancelar"
        confirmTitle="Confirmar"
        onCancelClick={() => setIsModalOpen(false)}
        onConfirmClick={handlePostDelete}
      />
    </>
  );
}
