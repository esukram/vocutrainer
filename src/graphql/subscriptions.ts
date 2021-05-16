/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateLibrary = /* GraphQL */ `
  subscription OnCreateLibrary($username: String) {
    onCreateLibrary(username: $username) {
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
export const onUpdateLibrary = /* GraphQL */ `
  subscription OnUpdateLibrary($username: String) {
    onUpdateLibrary(username: $username) {
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
export const onDeleteLibrary = /* GraphQL */ `
  subscription OnDeleteLibrary($username: String) {
    onDeleteLibrary(username: $username) {
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
export const onCreateDictionary = /* GraphQL */ `
  subscription OnCreateDictionary($username: String) {
    onCreateDictionary(username: $username) {
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
export const onUpdateDictionary = /* GraphQL */ `
  subscription OnUpdateDictionary($username: String) {
    onUpdateDictionary(username: $username) {
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
export const onDeleteDictionary = /* GraphQL */ `
  subscription OnDeleteDictionary($username: String) {
    onDeleteDictionary(username: $username) {
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
