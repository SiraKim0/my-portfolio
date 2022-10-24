import { NavContainer, IconBtn } from "./NavbarStyle";
import { Link, NavLink } from "react-router-dom";
import { FaGithub, FaBloggerB } from "react-icons/fa";
import { GiHamburgerMenu } from "react-icons/gi";

export default function Navbar() {
  return (
    <NavContainer>
      <div className="desktop">
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
        <div className="link">
          <IconBtn>
            <FaGithub />
          </IconBtn>
          <IconBtn>
            <FaBloggerB />
          </IconBtn>
        </div>
      </div>
      <div className="mobile">
        <div className="menu-icon">
          <GiHamburgerMenu />
        </div>
      </div>
    </NavContainer>
  );
}
