import styled from "styled-components";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <NavbarStyle>
      <LogoTextStyle>
        Obsessed <span>Watch</span>
      </LogoTextStyle>
      <LinkStyle>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/watches">Watches</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
        <li>
          <Link to="/contact">Contact</Link>
        </li>
      </LinkStyle>
    </NavbarStyle>
  );
};

const NavbarStyle = styled.nav`
  /* background-color: #393e46; */
  margin-top: 1rem;
  display: flex;
  justify-content: space-between;
  font-family: "Roboto", sans-serif;
  font-size: 1.3rem;
`;

const LogoTextStyle = styled.h1`
  font-family: cursive;
  span {
    background-color: #393e46;
    color: #fff;
    padding: 0.4rem;
  }
`;

const LinkStyle = styled.ul`
  list-style: none;
  display: flex;
  li {
    padding: 0.5rem;
    a {
      text-decoration: none;
      color: #232932;
      font-size: 1.3rem;
    }
  }
`;

export default Navbar;
