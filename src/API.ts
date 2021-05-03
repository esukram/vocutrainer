/* tslint:disable */
/* eslint-disable */
//  This file was automatically generated and should not be edited.

export type CreateLibraryInput = {
  id?: string | null,
  name: string,
};

export type ModelLibraryConditionInput = {
  name?: ModelStringInput | null,
  and?: Array< ModelLibraryConditionInput | null > | null,
  or?: Array< ModelLibraryConditionInput | null > | null,
  not?: ModelLibraryConditionInput | null,
};

export type ModelStringInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
  size?: ModelSizeInput | null,
};

export enum ModelAttributeTypes {
  binary = "binary",
  binarySet = "binarySet",
  bool = "bool",
  list = "list",
  map = "map",
  number = "number",
  numberSet = "numberSet",
  string = "string",
  stringSet = "stringSet",
  _null = "_null",
}


export type ModelSizeInput = {
  ne?: number | null,
  eq?: number | null,
  le?: number | null,
  lt?: number | null,
  ge?: number | null,
  gt?: number | null,
  between?: Array< number | null > | null,
};

export type Library = {
  __typename: "Library",
  id?: string,
  name?: string,
  books?: ModelBookConnection,
  createdAt?: string,
  updatedAt?: string,
};

export type ModelBookConnection = {
  __typename: "ModelBookConnection",
  items?:  Array<Book | null > | null,
  nextToken?: string | null,
};

export type Book = {
  __typename: "Book",
  id?: string,
  title?: string,
  libraryId?: string,
  library?: Library,
  createdAt?: string,
  updatedAt?: string,
};

export type UpdateLibraryInput = {
  id: string,
  name?: string | null,
};

export type DeleteLibraryInput = {
  id?: string | null,
};

export type CreateBookInput = {
  id?: string | null,
  title: string,
  libraryId: string,
};

export type ModelBookConditionInput = {
  title?: ModelStringInput | null,
  libraryId?: ModelIDInput | null,
  and?: Array< ModelBookConditionInput | null > | null,
  or?: Array< ModelBookConditionInput | null > | null,
  not?: ModelBookConditionInput | null,
};

export type ModelIDInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
  size?: ModelSizeInput | null,
};

export type UpdateBookInput = {
  id: string,
  title?: string | null,
  libraryId?: string | null,
};

export type DeleteBookInput = {
  id?: string | null,
};

export type ModelLibraryFilterInput = {
  id?: ModelIDInput | null,
  name?: ModelStringInput | null,
  and?: Array< ModelLibraryFilterInput | null > | null,
  or?: Array< ModelLibraryFilterInput | null > | null,
  not?: ModelLibraryFilterInput | null,
};

export type ModelLibraryConnection = {
  __typename: "ModelLibraryConnection",
  items?:  Array<Library | null > | null,
  nextToken?: string | null,
};

export type ModelBookFilterInput = {
  id?: ModelIDInput | null,
  title?: ModelStringInput | null,
  libraryId?: ModelIDInput | null,
  and?: Array< ModelBookFilterInput | null > | null,
  or?: Array< ModelBookFilterInput | null > | null,
  not?: ModelBookFilterInput | null,
};

export type CreateLibraryMutationVariables = {
  input?: CreateLibraryInput,
  condition?: ModelLibraryConditionInput | null,
};

export type CreateLibraryMutation = {
  createLibrary?:  {
    __typename: "Library",
    id: string,
    name: string,
    books?:  {
      __typename: "ModelBookConnection",
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdateLibraryMutationVariables = {
  input?: UpdateLibraryInput,
  condition?: ModelLibraryConditionInput | null,
};

export type UpdateLibraryMutation = {
  updateLibrary?:  {
    __typename: "Library",
    id: string,
    name: string,
    books?:  {
      __typename: "ModelBookConnection",
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeleteLibraryMutationVariables = {
  input?: DeleteLibraryInput,
  condition?: ModelLibraryConditionInput | null,
};

export type DeleteLibraryMutation = {
  deleteLibrary?:  {
    __typename: "Library",
    id: string,
    name: string,
    books?:  {
      __typename: "ModelBookConnection",
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type CreateBookMutationVariables = {
  input?: CreateBookInput,
  condition?: ModelBookConditionInput | null,
};

export type CreateBookMutation = {
  createBook?:  {
    __typename: "Book",
    id: string,
    title: string,
    libraryId: string,
    library?:  {
      __typename: "Library",
      id: string,
      name: string,
      createdAt: string,
      updatedAt: string,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdateBookMutationVariables = {
  input?: UpdateBookInput,
  condition?: ModelBookConditionInput | null,
};

export type UpdateBookMutation = {
  updateBook?:  {
    __typename: "Book",
    id: string,
    title: string,
    libraryId: string,
    library?:  {
      __typename: "Library",
      id: string,
      name: string,
      createdAt: string,
      updatedAt: string,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeleteBookMutationVariables = {
  input?: DeleteBookInput,
  condition?: ModelBookConditionInput | null,
};

export type DeleteBookMutation = {
  deleteBook?:  {
    __typename: "Book",
    id: string,
    title: string,
    libraryId: string,
    library?:  {
      __typename: "Library",
      id: string,
      name: string,
      createdAt: string,
      updatedAt: string,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type GetLibraryByIdQueryVariables = {
  libraryId?: string,
};

export type GetLibraryByIdQuery = {
  getLibraryById?:  {
    __typename: "Library",
    id: string,
    name: string,
    books?:  {
      __typename: "ModelBookConnection",
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ListLibrariesQuery = {
  listLibraries?:  Array< {
    __typename: "Library",
    id: string,
    name: string,
    books?:  {
      __typename: "ModelBookConnection",
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null > | null,
};

export type GetLibraryQueryVariables = {
  id?: string,
};

export type GetLibraryQuery = {
  getLibrary?:  {
    __typename: "Library",
    id: string,
    name: string,
    books?:  {
      __typename: "ModelBookConnection",
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ListLibrarysQueryVariables = {
  filter?: ModelLibraryFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListLibrarysQuery = {
  listLibrarys?:  {
    __typename: "ModelLibraryConnection",
    items?:  Array< {
      __typename: "Library",
      id: string,
      name: string,
      createdAt: string,
      updatedAt: string,
    } | null > | null,
    nextToken?: string | null,
  } | null,
};

export type GetBookQueryVariables = {
  id?: string,
};

export type GetBookQuery = {
  getBook?:  {
    __typename: "Book",
    id: string,
    title: string,
    libraryId: string,
    library?:  {
      __typename: "Library",
      id: string,
      name: string,
      createdAt: string,
      updatedAt: string,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ListBooksQueryVariables = {
  filter?: ModelBookFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListBooksQuery = {
  listBooks?:  {
    __typename: "ModelBookConnection",
    items?:  Array< {
      __typename: "Book",
      id: string,
      title: string,
      libraryId: string,
      createdAt: string,
      updatedAt: string,
    } | null > | null,
    nextToken?: string | null,
  } | null,
};

export type OnCreateLibrarySubscription = {
  onCreateLibrary?:  {
    __typename: "Library",
    id: string,
    name: string,
    books?:  {
      __typename: "ModelBookConnection",
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdateLibrarySubscription = {
  onUpdateLibrary?:  {
    __typename: "Library",
    id: string,
    name: string,
    books?:  {
      __typename: "ModelBookConnection",
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeleteLibrarySubscription = {
  onDeleteLibrary?:  {
    __typename: "Library",
    id: string,
    name: string,
    books?:  {
      __typename: "ModelBookConnection",
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnCreateBookSubscription = {
  onCreateBook?:  {
    __typename: "Book",
    id: string,
    title: string,
    libraryId: string,
    library?:  {
      __typename: "Library",
      id: string,
      name: string,
      createdAt: string,
      updatedAt: string,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdateBookSubscription = {
  onUpdateBook?:  {
    __typename: "Book",
    id: string,
    title: string,
    libraryId: string,
    library?:  {
      __typename: "Library",
      id: string,
      name: string,
      createdAt: string,
      updatedAt: string,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeleteBookSubscription = {
  onDeleteBook?:  {
    __typename: "Book",
    id: string,
    title: string,
    libraryId: string,
    library?:  {
      __typename: "Library",
      id: string,
      name: string,
      createdAt: string,
      updatedAt: string,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};
