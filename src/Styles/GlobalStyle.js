import styled, { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }
    a{
      color: aliceblue;
      text-decoration: none;
    }
`;
export const Container = styled.div`
  position: relative;
  height: 100vh;
  background-color: #222222;
`;
export const Button = styled.button`
  border: none;
  box-shadow: none;
  cursor: pointer;
`;
