//import { GraphQLResult } from "@aws-amplify/api";
import callGraphQL from './graphql-api';

import { Library, ListLibrarysQuery } from "./API";
import { listLibrarys } from "./queries";

export const listLibraries = async () => {
  const librariesData = await callGraphQL<ListLibrarysQuery>(listLibrarys);

  return librariesData.data?.listLibrarys?.items?.map(
    library => ({ ...library } as Library))
  || []
}
