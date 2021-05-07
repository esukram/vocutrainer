/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getLibraryById = /* GraphQL */ `
  query GetLibraryById($libraryId: String!) {
    getLibraryById(libraryId: $libraryId) {
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
export const listLibraries = /* GraphQL */ `
  query ListLibraries {
    listLibraries {
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
export const getDictionaryById = /* GraphQL */ `
  query GetDictionaryById($dictionaryId: String!) {
    getDictionaryById(dictionaryId: $dictionaryId) {
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
export const listDictionaries = /* GraphQL */ `
  query ListDictionaries {
    listDictionaries {
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
export const getLibrary = /* GraphQL */ `
  query GetLibrary($id: ID!) {
    getLibrary(id: $id) {
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
        createdAt
        updatedAt
        userId
      }
      nextToken
    }
  }
`;
export const getDictionary = /* GraphQL */ `
  query GetDictionary($id: ID!) {
    getDictionary(id: $id) {
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
export const listDictionarys = /* GraphQL */ `
  query ListDictionarys(
    $filter: ModelDictionaryFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listDictionarys(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        userId
        title
        libraryId
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
