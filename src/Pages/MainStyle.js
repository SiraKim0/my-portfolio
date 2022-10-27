import styled from "styled-components";
import { Container } from "../Styles/GlobalStyle";

export const MainContainer = styled(Container)`
  display: flex;
  .content {
    width: 100%;
    height: 100vh;
    padding: 2rem 5rem;
    display: flex;
    align-items: center;
    .row {
      flex-grow: 1;
    }
    .name,
    .info {
      color: #f2f2f2;
      display: block;
    }
    .name {
      font-size: 110px;
    }
    .info {
      font-size: 50px;
    }
    .row .text {
      color: #f2f2f2;
      display: inline-block;
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
    .folder {
      padding: 5rem;
      flex-grow: 1;
      text-align: center;
      animation: boxAnimation 0.5s;
      @keyframes boxAnimation {
        0% {
          transform: rotate(0deg);
          opacity: 0;
        }
        30% {
          transform: rotate(20deg);
          opacity: 0.3;
        }
        60% {
          transform: rotate(-20deg);
          opacity: 0.6;
        }
        80% {
          transform: rotate(10deg);
          opacity: 0.8;
        }
        100% {
          transform: rotate(0deg);
          opacity: 1;
        }
      }
      button {
        display: block;
        margin: 0 auto;
        padding: 0.5rem 2rem;
      }
    }
  }
  @media screen and (max-width: 1200px) {
    transition: all 1s ease-in;
    .content {
      flex-direction: column;
    }
  }
  }
`;

export const AboutContiner = styled(Container)`
  display: flex;
`;

export const ContactContainer = styled(Container)`
  display: flex;
`;

export const WorkContainer = styled(Container)`
  display: flex;
`;

export const SkillContainer = styled(Container)`
  display: flex;
`;

export const TestContiner = styled(Container)``;
