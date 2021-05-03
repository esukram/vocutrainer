import { Library, ListLibrarysQuery } from "../API";
// import { OnCreateLibrarySubscription } from "../API";
import { GraphQLResult } from "@aws-amplify/api";

function mapListLibraryQuery(listTodosQuery: GraphQLResult<ListLibrarysQuery>): Library[] {
  return listTodosQuery.data?.listLibrarys?.items?.map(library => ({ ...library } as Library)) || []
}

/*
function mapOnCreateTodoSubscription(createTodoSubscription: OnCreateTodoSubscription): Todo {
  const { id, name, description } = createTodoSubscription.onCreateTodo || {};
  return {
    id, name, description
  } as Todo
}
*/

export { mapListLibraryQuery }
