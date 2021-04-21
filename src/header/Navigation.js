import { NavLink } from "react-router-dom";

export default function Navigation() {
  return (
    <nav>
      <ul>
        <li>
          <NavLink exact to="/" activeClassName="active-link">
            Home
          </NavLink>
          <NavLink to="/contacts" activeClassName="active-link">
            Contacts
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}
