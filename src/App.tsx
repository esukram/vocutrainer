import "./App.css";

import { useState, useEffect } from "react";
import { Switch, Route } from "react-router-dom";

import { QueryClient, QueryClientProvider } from "react-query";
import { ReactQueryDevtools } from "react-query/devtools";

import {
  onAuthUIStateChange,
  AuthState,
  CognitoUserInterface,
} from "@aws-amplify/ui-components";
import { Auth } from "@aws-amplify/auth";

import { Header, Home, Libraries, libraryIdPath, Library } from "./components";

import Amplify from "@aws-amplify/core";
import awsExports from "./aws-exports";
import Login from "./components/Login";
Amplify.configure(awsExports);

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: Infinity,
    },
  },
});

const App = () => {
  const [authState, setAuthState] = useState<AuthState>();
  const [user, setUser] = useState<CognitoUserInterface | undefined>();

  useEffect(() => {
    // load data in case of page reload
    if (authState === undefined) {
      Auth.currentAuthenticatedUser()
        .then((authData) => {
          setAuthState(AuthState.SignedIn);
          setUser(authData);
        })
        .catch((reason) => {
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
    <QueryClientProvider client={queryClient}>
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
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  ) : (
    // <AmplifyAuthenticator />
    <Login />
  );
};

// rework with https://docs.amplify.aws/lib/auth/emailpassword/q/platform/js#re-send-confirmation-code
export default App;
