import { API, graphqlOperation } from 'aws-amplify';
import { GraphQLResult } from "@aws-amplify/api";

import {
  CreateLibraryInput, CreateLibraryMutation,
  DeleteLibraryMutation, DeleteLibraryMutationVariables, DeleteLibraryInput,
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
  const delResult = await API.graphql(graphqlOperation(deleteLibMutation, { input: {id: libraryId} })) as GraphQLResult<DeleteLibraryMutation>;
  console.log(delResult);

  return delResult;
}

export const listLibraries = async () => {
  const librariesData = await callGraphQL<ListLibrarysQuery>(listLibrarys);

  return librariesData.data?.listLibrarys?.items?.map(
    library => ({ ...library } as Library))
  || []
}
