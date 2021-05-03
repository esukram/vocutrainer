import './App.css';

import { useState, useEffect } from 'react';
import {
  onAuthUIStateChange,
  AuthState,
  CognitoUserInterface
 } from "@aws-amplify/ui-components";
import {
  AmplifyGreetings,
  AmplifyAuthenticator
} from '@aws-amplify/ui-react';

import { API, Auth, graphqlOperation } from "aws-amplify";
import GraphQLAPI, { GraphQLResult, GRAPHQL_AUTH_MODE } from '@aws-amplify/api-graphql';
import * as queries from './graphql/queries';
import * as mutations from './graphql/mutations';

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
    return onAuthUIStateChange((nextAuthState, authData) => {
      setAuthState(nextAuthState);
      setUser(authData as CognitoUserInterface);
    });
  }, []);

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

  useEffect(() => {
    async function getLibrary() {
      try {
        const todoData = await callGraphQL<ListLibrarysQuery>(queries.listLibrarys);
        const todos = mapListLibraryQuery(todoData);
        console.log('Finished loading todos!');
        console.log(todos);
        setBooks(todos);
      } catch (error) {
        console.error("Error fetching todos", error);
      }
    }
    getLibrary();
  }, []);

  const signOut = async () => {
    await Auth.signOut();
    console.log('Sign out finished')!
  }

  const getBooks = () => {
    if (books.length < 1) return <p>No books available</p>

    return(
      <ul>
        {
          books.map((book, index) => {
            console.log(book);
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
        { getBooks() }
      </div>
    </div>
  ) : (
    <AmplifyAuthenticator />
  );
};

export default App;
