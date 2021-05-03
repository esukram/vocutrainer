import './App.css';

import { useState, useEffect } from 'react';
import {
  onAuthUIStateChange,
  AuthState,
  CognitoUserInterface
 } from "@aws-amplify/ui-components";
import { AmplifyAuthenticator } from '@aws-amplify/ui-react';

import { API, Auth, graphqlOperation } from "aws-amplify";
import * as queries from './graphql/queries';

import callGraphQL from './models/graphql-api';
import { mapListLibraryQuery } from './models/library';

import Amplify from "aws-amplify";
import awsExports from "./aws-exports";
import { CreateLibraryInput, Library, ListLibrarysQuery } from './API';
import { createLibrary } from './graphql/mutations';
Amplify.configure(awsExports);

const App = () => {
  const [authState, setAuthState] = useState<AuthState>();
  const [user, setUser] = useState<CognitoUserInterface | undefined>();
  const [books, setBooks] = useState<Library[]>([]);

  useEffect(() => {

    // load data in case of page reload
    if (authState === undefined) {
      Auth.currentAuthenticatedUser().then(authData => {
        setAuthState(AuthState.SignedIn);
        setUser(authData);
      }).catch(reason => {
        // user not logged in
      });
    }

    // returns Hub unregister function
    // https://github.com/aws-amplify/amplify-js/blob/master/packages/amplify-ui-components/src/common/helpers.ts#L58,L82
    return onAuthUIStateChange((nextAuthState, authData) => {
      if (nextAuthState === authState) return;

      setAuthState(nextAuthState);
      setUser(authData as CognitoUserInterface);
    });
  }, [authState]);

  useEffect(() => {
    async function getLibrary() {
      if (authState !== AuthState.SignedIn || !user) return;

      try {
        const todoData = await callGraphQL<ListLibrarysQuery>(queries.listLibrarys);
        setBooks(mapListLibraryQuery(todoData));
      } catch (error) {
        console.error("Error fetching todos", error);
      }
    }

    getLibrary();
  }, [authState, user]);

  const signOut = async () => {
    await Auth.signOut();
  }

  useEffect(() => {
    // @ts-ignore: I do not care
    async function addLibrary() {
      try {
        const entry: CreateLibraryInput = {
          name: 'Foo',
        };

        const result = await API.graphql(graphqlOperation(createLibrary, {input: entry}))
        console.log(result);
      } catch (err) {
        console.log('error creating entry:', err)
      }
    }

    //addLibrary();
  }, []);

  const Books = () => {
    if (books.length < 1) return <p>No books available</p>

    return(
      <ul>
        {
          books.map((book, index) => {
            return <li key={ index }>{book.name} ({book.id})</li>;
          })
        }
      </ul>
    );
  }

  return authState === AuthState.SignedIn && user ? (
    <div className="App">
      <header>
        <div>Hello {user.username}</div>
        <div><button onClick={signOut}>Sign Out</button></div>
      </header>
      <div>Hello World!</div>
      <div>
        <h2>Books</h2>
        <Books />
      </div>
    </div>
  ) : (
    <AmplifyAuthenticator />
  );
};

export default App;
