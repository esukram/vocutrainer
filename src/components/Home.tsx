import { Link } from "react-router-dom";
import { librariesPath } from "./Libraries";

export const Home = () => {
  return (
    <>
      <h1>Home</h1>
      <p>Welcome to the Vocabulary Trainer!</p>
      <p>
        Get started by selecting one of your{" "}
        <Link to={librariesPath}>libraries</Link>.
      </p>
    </>
  );
};
