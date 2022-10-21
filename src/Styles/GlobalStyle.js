import styled, { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }
`;
export const Container = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: #222222;
`;
