//import { GraphQLResult } from "@aws-amplify/api";
import callGraphQL from './graphql-api';

import { Library, ListLibrarysQuery } from "./API";
import { listLibrarys as listLibrariesQuery } from "./queries";

export const listLibraries = async () => {
  const librariesData = await callGraphQL<ListLibrarysQuery>(listLibrariesQuery);

  return librariesData.data?.listLibrarys?.items?.map(
    library => ({ ...library } as Library))
  || []
}
