import { Navigation, UserInfo } from "./";

export interface HeaderProps {
  username: string;
  children?: React.ReactNode;
}

export const Header = ({ children, username }: HeaderProps): JSX.Element => {
  return (
    <header>
      <Navigation />
      <UserInfo username={username} />
      {children}
    </header>
  );
};
