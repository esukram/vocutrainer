import { Navigation, UserInfo } from "./";

export interface HeaderProps {
  children?: React.ReactNode;
}

export const Header = ({ children }: HeaderProps): JSX.Element => {
  return (
    <header>
      <Navigation />
      <UserInfo />
      {children}
    </header>
  );
};
