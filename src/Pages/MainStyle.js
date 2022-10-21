import styled from "styled-components";
import { Container } from "../Styles/GlobalStyle";

export const MainContainer = styled(Container)`
  display: flex;
  justify-content: center;
  align-items: center;
  .content {
    width: 1200px;
    border: 1px solid red;
    .row .text {
      color: #f2f2f2;
    }
    .row:nth-child(1) {
      border: 1px solid blue;
      font-size: 90px;
    }
    .row:nth-child(3) {
      border: 1px solid blue;
      font-size: 40px;
    }
  }
`;

export const AboutContiner = styled(Container)`
  display: flex;
  justify-content: center;
  align-items: center;
`;
