/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateLibrary = /* GraphQL */ `
  subscription OnCreateLibrary($userId: String) {
    onCreateLibrary(userId: $userId) {
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
export const onUpdateLibrary = /* GraphQL */ `
  subscription OnUpdateLibrary($userId: String) {
    onUpdateLibrary(userId: $userId) {
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
export const onDeleteLibrary = /* GraphQL */ `
  subscription OnDeleteLibrary($userId: String) {
    onDeleteLibrary(userId: $userId) {
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
export const onCreateDictionary = /* GraphQL */ `
  subscription OnCreateDictionary($userId: String) {
    onCreateDictionary(userId: $userId) {
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
export const onUpdateDictionary = /* GraphQL */ `
  subscription OnUpdateDictionary($userId: String) {
    onUpdateDictionary(userId: $userId) {
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
export const onDeleteDictionary = /* GraphQL */ `
  subscription OnDeleteDictionary($userId: String) {
    onDeleteDictionary(userId: $userId) {
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
