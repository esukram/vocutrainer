/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createLibrary = /* GraphQL */ `
  mutation CreateLibrary(
    $input: CreateLibraryInput!
    $condition: ModelLibraryConditionInput
  ) {
    createLibrary(input: $input, condition: $condition) {
      id
      name
      dictionaries {
        nextToken
      }
      createdAt
      updatedAt
      userId
    }
  }
`;
export const updateLibrary = /* GraphQL */ `
  mutation UpdateLibrary(
    $input: UpdateLibraryInput!
    $condition: ModelLibraryConditionInput
  ) {
    updateLibrary(input: $input, condition: $condition) {
      id
      name
      dictionaries {
        nextToken
      }
      createdAt
      updatedAt
      userId
    }
  }
`;
export const deleteLibrary = /* GraphQL */ `
  mutation DeleteLibrary(
    $input: DeleteLibraryInput!
    $condition: ModelLibraryConditionInput
  ) {
    deleteLibrary(input: $input, condition: $condition) {
      id
      name
      dictionaries {
        nextToken
      }
      createdAt
      updatedAt
      userId
    }
  }
`;
export const createDictionary = /* GraphQL */ `
  mutation CreateDictionary(
    $input: CreateDictionaryInput!
    $condition: ModelDictionaryConditionInput
  ) {
    createDictionary(input: $input, condition: $condition) {
      id
      userId
      title
      libraryId
      library {
        id
        name
        createdAt
        updatedAt
        userId
      }
      createdAt
      updatedAt
    }
  }
`;
export const updateDictionary = /* GraphQL */ `
  mutation UpdateDictionary(
    $input: UpdateDictionaryInput!
    $condition: ModelDictionaryConditionInput
  ) {
    updateDictionary(input: $input, condition: $condition) {
      id
      userId
      title
      libraryId
      library {
        id
        name
        createdAt
        updatedAt
        userId
      }
      createdAt
      updatedAt
    }
  }
`;
export const deleteDictionary = /* GraphQL */ `
  mutation DeleteDictionary(
    $input: DeleteDictionaryInput!
    $condition: ModelDictionaryConditionInput
  ) {
    deleteDictionary(input: $input, condition: $condition) {
      id
      userId
      title
      libraryId
      library {
        id
        name
        createdAt
        updatedAt
        userId
      }
      createdAt
      updatedAt
    }
  }
`;
