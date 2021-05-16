import {
  CreateLibraryInput, CreateLibraryMutation,
  DeleteLibraryMutation,
  Library, ListLibrarysQuery,
} from "./API";
import { listLibrarys } from "./queries";
import { createLibrary, deleteLibrary as deleteLibMutation } from "./mutations";

import callGraphQL from './graphql-api';

export const addLibrary = async (library:CreateLibraryInput) => {
  return await callGraphQL<CreateLibraryMutation>(
    createLibrary, {input: library}
  );
}

export const deleteLibrary = async (libraryId:string) => {
  const deleted = await callGraphQL<DeleteLibraryMutation>(
    deleteLibMutation, {input: {id: libraryId}}
  );

  return deleted.data?.deleteLibrary;
}

export const listLibraries = async () => {
  const librariesData = await callGraphQL<ListLibrarysQuery>(listLibrarys);

  return librariesData.data?.listLibrarys?.items?.map(
    library => ({ ...library } as Library))
  || []
}
