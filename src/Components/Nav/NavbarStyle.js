import styled from "styled-components";
import { Button } from "../../Styles/GlobalStyle";

export const NavContainer = styled.nav`
  background-color: #181818;
  width: 13rem;
  z-index: 9999;
  .desktop {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    height: 100vh;
  }
  ul {
    text-align: center;
    li {
      padding: 1rem;
      border-top: 1px solid #909096;
      border-bottom: 1px solid #909096;
    }
  }
  .link {
    width: 100%;
    text-align: center;
    padding: 5rem 0;
  }
  .mobile {
    display: none;
  }
  .logo {
    img {
      width: 100%;
      background-color: black;
    }
  }
  @media screen and (max-width: 1200px) {
    display: none;
  }
`;
export const IconBtn = styled(Button)`
  width: 30px;
  height: 30px;
  border-radius: 50%;
  margin: 1rem;
`;
