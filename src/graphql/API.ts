/* tslint:disable */
/* eslint-disable */
//  This file was automatically generated and should not be edited.

export type CreateLibraryInput = {
  id?: string | null,
  name: string,
  username?: string | null,
  createdAt?: string | null,
  updatedAt?: string | null,
};

export type ModelLibraryConditionInput = {
  name?: ModelStringInput | null,
  createdAt?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
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
  dictionaries?: ModelDictionaryConnection,
  username?: string | null,
  createdAt?: string | null,
  updatedAt?: string | null,
};

export type ModelDictionaryConnection = {
  __typename: "ModelDictionaryConnection",
  items?:  Array<Dictionary | null > | null,
  nextToken?: string | null,
};

export type Dictionary = {
  __typename: "Dictionary",
  id?: string,
  title?: string,
  libraryId?: string,
  library?: Library,
  username?: string | null,
  createdAt?: string | null,
  updatedAt?: string | null,
};

export type UpdateLibraryInput = {
  id: string,
  name?: string | null,
  username?: string | null,
  createdAt?: string | null,
  updatedAt?: string | null,
};

export type DeleteLibraryInput = {
  id?: string | null,
};

export type CreateDictionaryInput = {
  id?: string | null,
  title: string,
  libraryId: string,
  username?: string | null,
  createdAt?: string | null,
  updatedAt?: string | null,
};

export type ModelDictionaryConditionInput = {
  title?: ModelStringInput | null,
  libraryId?: ModelIDInput | null,
  createdAt?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
  and?: Array< ModelDictionaryConditionInput | null > | null,
  or?: Array< ModelDictionaryConditionInput | null > | null,
  not?: ModelDictionaryConditionInput | null,
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

export type UpdateDictionaryInput = {
  id: string,
  title?: string | null,
  libraryId?: string | null,
  username?: string | null,
  createdAt?: string | null,
  updatedAt?: string | null,
};

export type DeleteDictionaryInput = {
  id?: string | null,
};

export type ModelLibraryFilterInput = {
  id?: ModelIDInput | null,
  name?: ModelStringInput | null,
  username?: ModelStringInput | null,
  createdAt?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
  and?: Array< ModelLibraryFilterInput | null > | null,
  or?: Array< ModelLibraryFilterInput | null > | null,
  not?: ModelLibraryFilterInput | null,
};

export type ModelLibraryConnection = {
  __typename: "ModelLibraryConnection",
  items?:  Array<Library | null > | null,
  nextToken?: string | null,
};

export type ModelDictionaryFilterInput = {
  id?: ModelIDInput | null,
  title?: ModelStringInput | null,
  libraryId?: ModelIDInput | null,
  username?: ModelStringInput | null,
  createdAt?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
  and?: Array< ModelDictionaryFilterInput | null > | null,
  or?: Array< ModelDictionaryFilterInput | null > | null,
  not?: ModelDictionaryFilterInput | null,
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
    dictionaries?:  {
      __typename: "ModelDictionaryConnection",
      nextToken?: string | null,
    } | null,
    username?: string | null,
    createdAt?: string | null,
    updatedAt?: string | null,
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
    dictionaries?:  {
      __typename: "ModelDictionaryConnection",
      nextToken?: string | null,
    } | null,
    username?: string | null,
    createdAt?: string | null,
    updatedAt?: string | null,
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
    dictionaries?:  {
      __typename: "ModelDictionaryConnection",
      nextToken?: string | null,
    } | null,
    username?: string | null,
    createdAt?: string | null,
    updatedAt?: string | null,
  } | null,
};

export type CreateDictionaryMutationVariables = {
  input?: CreateDictionaryInput,
  condition?: ModelDictionaryConditionInput | null,
};

export type CreateDictionaryMutation = {
  createDictionary?:  {
    __typename: "Dictionary",
    id: string,
    title: string,
    libraryId: string,
    library:  {
      __typename: "Library",
      id: string,
      name: string,
      username?: string | null,
      createdAt?: string | null,
      updatedAt?: string | null,
    },
    username?: string | null,
    createdAt?: string | null,
    updatedAt?: string | null,
  } | null,
};

export type UpdateDictionaryMutationVariables = {
  input?: UpdateDictionaryInput,
  condition?: ModelDictionaryConditionInput | null,
};

export type UpdateDictionaryMutation = {
  updateDictionary?:  {
    __typename: "Dictionary",
    id: string,
    title: string,
    libraryId: string,
    library:  {
      __typename: "Library",
      id: string,
      name: string,
      username?: string | null,
      createdAt?: string | null,
      updatedAt?: string | null,
    },
    username?: string | null,
    createdAt?: string | null,
    updatedAt?: string | null,
  } | null,
};

export type DeleteDictionaryMutationVariables = {
  input?: DeleteDictionaryInput,
  condition?: ModelDictionaryConditionInput | null,
};

export type DeleteDictionaryMutation = {
  deleteDictionary?:  {
    __typename: "Dictionary",
    id: string,
    title: string,
    libraryId: string,
    library:  {
      __typename: "Library",
      id: string,
      name: string,
      username?: string | null,
      createdAt?: string | null,
      updatedAt?: string | null,
    },
    username?: string | null,
    createdAt?: string | null,
    updatedAt?: string | null,
  } | null,
};

export type GetLibraryQueryVariables = {
  id?: string,
};

export type GetLibraryQuery = {
  getLibrary?:  {
    __typename: "Library",
    id: string,
    name: string,
    dictionaries?:  {
      __typename: "ModelDictionaryConnection",
      nextToken?: string | null,
    } | null,
    username?: string | null,
    createdAt?: string | null,
    updatedAt?: string | null,
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
      username?: string | null,
      createdAt?: string | null,
      updatedAt?: string | null,
    } | null > | null,
    nextToken?: string | null,
  } | null,
};

export type GetDictionaryQueryVariables = {
  id?: string,
};

export type GetDictionaryQuery = {
  getDictionary?:  {
    __typename: "Dictionary",
    id: string,
    title: string,
    libraryId: string,
    library:  {
      __typename: "Library",
      id: string,
      name: string,
      username?: string | null,
      createdAt?: string | null,
      updatedAt?: string | null,
    },
    username?: string | null,
    createdAt?: string | null,
    updatedAt?: string | null,
  } | null,
};

export type ListDictionarysQueryVariables = {
  filter?: ModelDictionaryFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListDictionarysQuery = {
  listDictionarys?:  {
    __typename: "ModelDictionaryConnection",
    items?:  Array< {
      __typename: "Dictionary",
      id: string,
      title: string,
      libraryId: string,
      username?: string | null,
      createdAt?: string | null,
      updatedAt?: string | null,
    } | null > | null,
    nextToken?: string | null,
  } | null,
};

export type OnCreateLibrarySubscriptionVariables = {
  username?: string | null,
};

export type OnCreateLibrarySubscription = {
  onCreateLibrary?:  {
    __typename: "Library",
    id: string,
    name: string,
    dictionaries?:  {
      __typename: "ModelDictionaryConnection",
      nextToken?: string | null,
    } | null,
    username?: string | null,
    createdAt?: string | null,
    updatedAt?: string | null,
  } | null,
};

export type OnUpdateLibrarySubscriptionVariables = {
  username?: string | null,
};

export type OnUpdateLibrarySubscription = {
  onUpdateLibrary?:  {
    __typename: "Library",
    id: string,
    name: string,
    dictionaries?:  {
      __typename: "ModelDictionaryConnection",
      nextToken?: string | null,
    } | null,
    username?: string | null,
    createdAt?: string | null,
    updatedAt?: string | null,
  } | null,
};

export type OnDeleteLibrarySubscriptionVariables = {
  username?: string | null,
};

export type OnDeleteLibrarySubscription = {
  onDeleteLibrary?:  {
    __typename: "Library",
    id: string,
    name: string,
    dictionaries?:  {
      __typename: "ModelDictionaryConnection",
      nextToken?: string | null,
    } | null,
    username?: string | null,
    createdAt?: string | null,
    updatedAt?: string | null,
  } | null,
};

export type OnCreateDictionarySubscriptionVariables = {
  username?: string | null,
};

export type OnCreateDictionarySubscription = {
  onCreateDictionary?:  {
    __typename: "Dictionary",
    id: string,
    title: string,
    libraryId: string,
    library:  {
      __typename: "Library",
      id: string,
      name: string,
      username?: string | null,
      createdAt?: string | null,
      updatedAt?: string | null,
    },
    username?: string | null,
    createdAt?: string | null,
    updatedAt?: string | null,
  } | null,
};

export type OnUpdateDictionarySubscriptionVariables = {
  username?: string | null,
};

export type OnUpdateDictionarySubscription = {
  onUpdateDictionary?:  {
    __typename: "Dictionary",
    id: string,
    title: string,
    libraryId: string,
    library:  {
      __typename: "Library",
      id: string,
      name: string,
      username?: string | null,
      createdAt?: string | null,
      updatedAt?: string | null,
    },
    username?: string | null,
    createdAt?: string | null,
    updatedAt?: string | null,
  } | null,
};

export type OnDeleteDictionarySubscriptionVariables = {
  username?: string | null,
};

export type OnDeleteDictionarySubscription = {
  onDeleteDictionary?:  {
    __typename: "Dictionary",
    id: string,
    title: string,
    libraryId: string,
    library:  {
      __typename: "Library",
      id: string,
      name: string,
      username?: string | null,
      createdAt?: string | null,
      updatedAt?: string | null,
    },
    username?: string | null,
    createdAt?: string | null,
    updatedAt?: string | null,
  } | null,
};
