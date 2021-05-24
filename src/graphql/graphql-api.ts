import { API, graphqlOperation } from "@aws-amplify/api";
import type { GraphQLResult } from "@aws-amplify/api";

export interface GraphQLOptions {
  input?: object;
  variables?: object;
}

export interface SubscriptionValue<T> {
  value: { data: T };
}

async function callGraphQL<T, V>(
  query: any,
  options?: V
): Promise<GraphQLResult<T>> {
  return (await API.graphql(
    graphqlOperation(query, options)
  )) as GraphQLResult<T>;
}

export function subscribeGraphQL<T>(
  subscription: any,
  callback: (value: T) => void
) {
  //@ts-ignore
  return API.graphql(graphqlOperation(subscription)).subscribe({
    next: (response: SubscriptionValue<T>) => callback(response.value.data),
  });
}

export default callGraphQL;
