import './App.css';

import { useState, useEffect } from 'react';
import { Switch, Route } from 'react-router-dom';

import {
  onAuthUIStateChange,
  AuthState,
  CognitoUserInterface
 } from "@aws-amplify/ui-components";
//import { AmplifyAuthenticator } from '@aws-amplify/ui-react';
import {withAuthenticator} from 'aws-amplify-react';
import { Auth } from "@aws-amplify/auth";

import {
  Header,
  Home,
  Libraries, libraryIdPath, Library
} from './components';

import Amplify from "@aws-amplify/core";
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

  return authState === AuthState.SignedIn && user ? (
    <div className="App">
      <Header username={user.username!}></Header>
      <main>
        <Switch>
          <Route path={libraryIdPath}>
            <Library />
          </Route>
          <Route exact path="/libraries">
            <Libraries />
          </Route>
          <Route exact path="/">
            <Home />
          </Route>
        </Switch>
      </main>
    </div>
  ) : (
    // <AmplifyAuthenticator />
    <div>Login</div>
  );
};

// rework with https://docs.amplify.aws/lib/auth/emailpassword/q/platform/js#re-send-confirmation-code
export default withAuthenticator(App);
