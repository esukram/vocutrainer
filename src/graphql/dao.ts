import type { Library } from "./";
import type {
  CreateLibraryMutation,
  CreateLibraryMutationVariables,
  CreateLibraryInput,
  DeleteLibraryMutation,
  DeleteLibraryMutationVariables,
  ListLibrarysQuery,
  ListLibrarysQueryVariables,
} from "./generated/API";
import { listLibrarys } from "./generated/queries";
import {
  createLibrary,
  deleteLibrary as deleteLibMutation,
} from "./generated/mutations";

import callGraphQL from "./graphql-api";
import { useMutation, useQuery, useQueryClient } from "react-query";

export const addLibrary = async (libraryName: string) => {
  const created = await callGraphQL<
    CreateLibraryMutation,
    CreateLibraryMutationVariables
  >(createLibrary, { input: { name: libraryName } });

  return created.data?.createLibrary as Library;
};

export const deleteLibrary = async (libraryId: string) => {
  const deleted = await callGraphQL<
    DeleteLibraryMutation,
    DeleteLibraryMutationVariables
  >(deleteLibMutation, { input: { id: libraryId } });

  return deleted.data?.deleteLibrary as Library;
};

export const listLibraries = async () => {
  const librariesData = await callGraphQL<
    ListLibrarysQuery,
    ListLibrarysQueryVariables
  >(listLibrarys);

  return (
    librariesData.data?.listLibrarys?.items?.map(
      (library) => ({ ...library } as Library)
    ) || []
  );
};

export const useListLibrariesQuery = () => {
  return useQuery<Library[], Error>("libraries", async () => {
    try {
      return (
        (
          await callGraphQL<ListLibrarysQuery, ListLibrarysQueryVariables>(
            listLibrarys
          )
        ).data?.listLibrarys?.items?.map(
          (library) => ({ ...library } as Library)
        ) || []
      );
    } catch (error) {
      let message = "Query failed: ";
      error.errors.forEach((error: Error) => {
        message += error.message;
      });
      throw new Error(message);
    }
  });
};

export const useCreateLibraryMutation = () => {
  const queryClient = useQueryClient();

  return useMutation<Library, Error, CreateLibraryInput>(
    async (library: CreateLibraryInput) => {
      return await addLibrary(library.name);
    },
    {
      onSuccess: (data) => {
        // brute force: queryClient.invalidateQueries('libraries')
        queryClient.setQueryData<Library[]>("libraries", (libraries) => [
          ...(libraries || []),
          data,
        ]);
      },
    }
  );
};

export const useDeleteLibraryMutation = () => {
  const queryClient = useQueryClient();

  return useMutation<Library, Error, Library>(
    async (library: Library) => {
      return await deleteLibrary(library.id);
    },
    {
      onSuccess: (data) => {
        queryClient.setQueryData<Library[]>(
          "libraries",
          (libraries) =>
            libraries?.filter((library) => library.id !== data.id) || []
        );
      },
    }
  );
};
