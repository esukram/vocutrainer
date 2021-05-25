import { useHistory } from "react-router-dom";
import { useAuthQuery, useAuthLogoutMutation } from "@api/useAuth";

export interface UserInfoProps {
  username: string;
}

export const UserInfo = () => {
  const history = useHistory();
  const { isLoading, data: { user } = {} } = useAuthQuery();
  const { mutateAsync: logout } = useAuthLogoutMutation();

  const signOut = async () => {
    logout(null, {
      onSuccess: () => {
        history.push("/");
      },
    });
  };

  if (isLoading || !user) return <div>Loading</div>;

  return (
    <div>
      <div>
        Hello: <label title={user.email}>{user.username}</label>
      </div>
      <div>
        <button onClick={signOut}>Sign Out</button>
      </div>
    </div>
  );
};
