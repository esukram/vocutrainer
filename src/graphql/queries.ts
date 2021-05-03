/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getLibraryById = /* GraphQL */ `
  query GetLibraryById($libraryId: String!) {
    getLibraryById(libraryId: $libraryId) {
      id
      name
      books {
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
export const listLibraries = /* GraphQL */ `
  query ListLibraries {
    listLibraries {
      id
      name
      books {
        nextToken
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
      books {
        nextToken
      }
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
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getBook = /* GraphQL */ `
  query GetBook($id: ID!) {
    getBook(id: $id) {
      id
      title
      libraryId
      library {
        id
        name
        createdAt
        updatedAt
      }
      createdAt
      updatedAt
    }
  }
`;
export const listBooks = /* GraphQL */ `
  query ListBooks(
    $filter: ModelBookFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listBooks(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        title
        libraryId
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
