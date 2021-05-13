import './App.css';

import { useState, useEffect } from 'react';
import {
  Switch,
  Route,
  useParams
} from 'react-router-dom';

import {
  onAuthUIStateChange,
  AuthState,
  CognitoUserInterface
 } from "@aws-amplify/ui-components";
import { AmplifyAuthenticator } from '@aws-amplify/ui-react';
import { Auth } from "aws-amplify";

import { Header, Libraries } from './components';

import Amplify from "aws-amplify";
import awsExports from "./aws-exports";
Amplify.configure(awsExports);

const App = () => {
  const [authState, setAuthState] = useState<AuthState>();
  const [user, setUser] = useState<CognitoUserInterface | undefined>();

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

  /*
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
  */

  return authState === AuthState.SignedIn && user ? (
    <div className="App">
      <Header username={user.username!}></Header>
      <main>
        <Switch>
          <Route path="/library/:libraryId">
            <Library />
          </Route>
          <Route exact path="/">
            <Libraries />
          </Route>
        </Switch>
      </main>
    </div>
  ) : (
    <AmplifyAuthenticator />
  );
};

export default App;

function Library() {
  const { libraryId } = useParams<{libraryId: string}>();

  return (
    <div>
      <h3>ID: {libraryId}</h3>
    </div>
  );
}
