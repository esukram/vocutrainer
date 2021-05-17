import type { Library } from './'
import type {
  CreateLibraryMutation, CreateLibraryMutationVariables,
  DeleteLibraryMutation, DeleteLibraryMutationVariables,
  ListLibrarysQuery, ListLibrarysQueryVariables
} from "./API";
import { listLibrarys } from "./queries";
import { createLibrary, deleteLibrary as deleteLibMutation } from "./mutations";

import callGraphQL from './graphql-api';

export const addLibrary = async (libraryName: string) => {
  const created = await callGraphQL<CreateLibraryMutation, CreateLibraryMutationVariables>(
    createLibrary, {input: { name: libraryName } }
  );

  return created.data?.createLibrary as Library;
}

export const deleteLibrary = async (libraryId: string) => {
  const deleted = await callGraphQL<DeleteLibraryMutation, DeleteLibraryMutationVariables>(
    deleteLibMutation, {input: {id: libraryId}}
  );

  return deleted.data?.deleteLibrary as Library;
}

export const listLibraries = async () => {
  const librariesData = await callGraphQL<ListLibrarysQuery, ListLibrarysQueryVariables>(listLibrarys);

  return librariesData.data?.listLibrarys?.items?.map(
    library => ({ ...library } as Library))
  || []
}
