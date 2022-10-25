import styled from "styled-components";
import { Container } from "../Styles/GlobalStyle";

export const MainContainer = styled(Container)`
  display: flex;
  .content {
    width: 100%;
    height: 100vh;
    padding: 2rem 3rem;
    display: flex;
    flex-direction: column;
    justify-content: center;

    .row .text {
      color: #f2f2f2;
      display: inline-block;
    }
    .row .aa {
      display: inline;
      vertical-align: middle;
      border-right: 0.05em solid black;
      animation: cursor 0.2s ease infinite;
    }
    .text {
      :hover {
        animation: boxFade 0.5s;
        transition: 1s ease;
        color: orange;
      }
      @keyframes boxFade {
        0% {
          transform: scale(1);
        }
        30% {
          transform: scaleX(1.3);
          transform: scaleY(0.7);
        }
        60% {
          transform: scaleX(0.8);
          transform: scaleY(1.2);
        }
        80% {
          transform: scaleX(1.2);
          transform: scaleY(0.8);
        }
        100% {
          transform: scale(1);
        }
      }
    }
    .row:nth-child(1) {
      font-size: 90px;
    }
    .row:nth-child(3) {
      font-size: 40px;
    }
  }
`;

export const AboutContiner = styled(Container)`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const ContactContainer = styled(Container)`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const WorkContainer = styled(Container)`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const SkillContainer = styled(Container)`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const TestContiner = styled(Container)``;
