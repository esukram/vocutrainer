/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getLibrary = /* GraphQL */ `
  query GetLibrary($id: ID!) {
    getLibrary(id: $id) {
      id
      name
      dictionaries {
        nextToken
      }
      username
      createdAt
      updatedAt
    }
  }
`;
export const listLibrarys = /* GraphQL */ `
  query ListLibrarys(
    $filter: ModelLibraryFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listLibrarys(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        name
        username
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getDictionary = /* GraphQL */ `
  query GetDictionary($id: ID!) {
    getDictionary(id: $id) {
      id
      title
      libraryId
      library {
        id
        name
        username
        createdAt
        updatedAt
      }
      username
      createdAt
      updatedAt
    }
  }
`;
export const listDictionarys = /* GraphQL */ `
  query ListDictionarys(
    $filter: ModelDictionaryFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listDictionarys(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        title
        libraryId
        username
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
