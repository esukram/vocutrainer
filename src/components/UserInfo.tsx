import { useHistory } from "react-router-dom";
import { useAuthQuery, useAuthLogoutMutation } from "@api/useAuth";

export interface UserInfoProps {
  username: string;
}

export const UserInfo = () => {
  const history = useHistory();
  const { data: auth } = useAuthQuery();
  const logout = useAuthLogoutMutation();

  const signOut = () => {
    logout.mutate();
    history.push("/");
  };

  return (
    <div>
      <div>
        Hello: <label title={auth?.user?.email}>{auth?.user?.username}</label>
      </div>
      <div>
        <button onClick={signOut}>Sign Out</button>
      </div>
    </div>
  );
};
