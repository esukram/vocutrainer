import { useMutation, useQuery, useQueryClient } from "react-query";
import { Auth } from "@aws-amplify/auth";
import { AuthState } from "@aws-amplify/ui-components";

const queryKey = "auth";

export type Auth = {
  state: AuthState;
  user?: User;
  message?: string;
};
export type User = {
  username: string;
  email?: string;
  subject?: string;
  groups?: string[];
};

export const useAuthQuery = () => {
  return useQuery<Auth, Error>(queryKey, async () => {
    console.log("Check auth state");

    try {
      const user = await Auth.currentAuthenticatedUser();
      console.log("Authenticated User", user);
      return {
        state: AuthState.SignedIn,
        user: {
          username: user.username,
          email: user.attributes?.email,
        },
      } as Auth;
    } catch (error) {
      return {
        state: AuthState.SignedOut,
        message: error,
      } as Auth;
    }
  });
};

export const useAuthLogoutMutation = () => {
  const queryClient = useQueryClient();

  return useMutation<Auth, Error>(
    queryKey,
    async () => {
      console.log("Calling logout");
      await Auth.signOut();
      return { state: AuthState.SignedOut } as Auth;
    },
    {
      onSettled: () => {
        queryClient.invalidateQueries();
        queryClient.clear();
      },
    }
  );
};
