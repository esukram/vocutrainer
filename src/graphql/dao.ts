//import { GraphQLResult } from "@aws-amplify/api";
import callGraphQL from './graphql-api';

import {
  CreateLibraryInput, CreateLibraryMutation,
  Library, ListLibrarysQuery
} from "./API";
import { listLibrarys } from "./queries";
import { createLibrary } from "./mutations";

export const listLibraries = async () => {
  const librariesData = await callGraphQL<ListLibrarysQuery>(listLibrarys);

  return librariesData.data?.listLibrarys?.items?.map(
    library => ({ ...library } as Library))
  || []
}

export const addLibrary = async (library:CreateLibraryInput) => {
  return await callGraphQL<CreateLibraryMutation>(
    createLibrary, {input: library}
  );
}
