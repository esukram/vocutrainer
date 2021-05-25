import { FormEvent, useState } from "react";
import { Auth } from "@aws-amplify/auth";

export const Login = () => {
  const [username, setUsetname] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [error, setError] = useState<string>();

  const login = async (username: string, password: string) => {
    return await Auth.signIn(username, password);
  };

  const handleLogin = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    try {
      await login(username, password);
    } catch (error) {
      setError(error.message);
    } finally {
      setPassword("");
    }
  };

  return (
    <>
      <h1>Login</h1>
      {error && <div style={{ color: "red" }}>{error}</div>}
      <form onSubmit={handleLogin}>
        <div>
          <label>
            Username
            <input
              name='username'
              placeholder='Username'
              value={username}
              onChange={(e) => {
                setUsetname(e.target.value);
              }}
            />
          </label>
        </div>
        <div>
          <label>
            Password
            <input
              name='password'
              placeholder='Password'
              value={password}
              type='password'
              onChange={(e) => {
                setPassword(e.target.value);
              }}
            />
          </label>
        </div>
        <div>
          <input type='submit' value='Log in' />
        </div>
      </form>
    </>
  );
};

// rework with https://docs.amplify.aws/lib/auth/emailpassword/q/platform/js#re-send-confirmation-code
export default Login;
