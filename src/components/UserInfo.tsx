import { Auth } from "aws-amplify";

export interface UserInfoProps {
  username: string;
}

export const UserInfo = ({username}: UserInfoProps): JSX.Element => {
  const signOut = async () => {
    await Auth.signOut();
    window.location.reload();
  }

  return (
    <div>
      <div>
        Hello: {username}
      </div>
      <div><button onClick={signOut}>Sign Out</button></div>
    </div>
  );
}
