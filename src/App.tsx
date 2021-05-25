import "./App.css";

import { Switch, Route } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "react-query";
import { ReactQueryDevtools } from "react-query/devtools";
import { useAuthQuery } from "./api/useAuth";

import {
  Header,
  Home,
  Libraries,
  libraryIdPath,
  Library,
  Login,
} from "./components";

import Amplify from "@aws-amplify/core";
import awsExports from "./aws-exports";

Amplify.configure(awsExports);

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: Infinity,
    },
  },
});

const App = () => {
  const { data: { user } = {} } = useAuthQuery();

  return user ? (
    <div className='App'>
      <Header />
      <main>
        <Switch>
          <Route path={libraryIdPath}>
            <Library />
          </Route>
          <Route exact path='/libraries'>
            <Libraries />
          </Route>
          <Route exact path='/'>
            <Home />
          </Route>
        </Switch>
      </main>
    </div>
  ) : (
    <>
      <Login />
    </>
  );
};

const QueryClientApp = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <App />
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  );
};

export default QueryClientApp;
