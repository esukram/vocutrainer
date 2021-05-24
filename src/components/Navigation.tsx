import { NavLink } from "react-router-dom";

export const Navigation = (): JSX.Element => {
  return (
    <nav>
      <ul>
        <li>
          <NavLink exact to="/" activeStyle={{ fontWeight: "bold" }}>
            Home
          </NavLink>
        </li>
        <li>
          <NavLink exact to="/libraries" activeStyle={{ fontWeight: "bold" }}>
            Libraries
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};
