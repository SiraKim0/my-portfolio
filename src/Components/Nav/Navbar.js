import { NavContainer } from "./NavbarStyle";
import { Link, NavLink } from "react-router-dom";

export default function Navbar() {
  return (
    <NavContainer>
      <div className="logo">
        <Link to="/">
          <img src="./symbol.png" alt="logo"></img>
        </Link>
      </div>
      <ul>
        <li>
          <NavLink to="/about">About</NavLink>
        </li>
        <li>
          <NavLink to="/skill">My skills</NavLink>
        </li>
        <li>
          <NavLink to="/work">Work</NavLink>
        </li>
        <li>
          <NavLink to="/contact">Contact</NavLink>
        </li>
      </ul>
    </NavContainer>
  );
}
