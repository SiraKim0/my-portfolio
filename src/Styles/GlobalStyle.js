import styled, { createGlobalStyle } from "styled-components";
import { useEffect, useState } from "react";
import classNames from "classnames";

export const GlobalStyle = createGlobalStyle`
    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }
    html, body {
      cursor: none;
    }
    nav{
      cursor: auto;
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

export const Cursor = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [hidden, setHidden] = useState(false); //마우스 상태
  const [clicked, setClicked] = useState(false);

  useEffect(() => {
    addEventListeners();
    return () => removeEventListeners();
  });
  const addEventListeners = () => {
    document.addEventListener("mousemove", onMouseMove);
    document.addEventListener("mouseenter", onMouseEnter);
    document.addEventListener("mouseleave", onMouseLeave);
    document.addEventListener("mousedown", onMouseDown);
    document.addEventListener("mouseup", onMouseUp);
  };
  const removeEventListeners = () => {
    document.removeEventListener("mousemove", onMouseMove);
    document.removeEventListener("mouseenter", onMouseEnter);
    document.removeEventListener("mouseleave", onMouseLeave);
    document.removeEventListener("mousedown", onMouseDown);
    document.removeEventListener("mouseup", onMouseUp);
  };
  const onMouseMove = (e) => {
    setPosition({ x: e.clientX, y: e.clientY });
  };
  const onMouseLeave = () => {
    setHidden(true);
  };
  const onMouseEnter = () => {
    setHidden(false);
  };
  const onMouseDown = () => {
    setClicked(true);
  };
  const onMouseUp = () => {
    setClicked(false);
  };
  const cursorClasses = classNames("cursor", {
    "cursor--clicked": clicked,
    "cursor--hidden": hidden,
  });
  return (
    <CustomCursor>
      <div
        className={cursorClasses}
        style={{ left: `${position.x}px`, top: `${position.y}px` }}
      />
    </CustomCursor>
  );
};
const CustomCursor = styled.div`
  .cursor {
    position: fixed;
    width: 30px;
    height: 30px;
    border: 2px solid #fefefe;
    border-radius: 50%;
    transform: translate(-50%, -50%);
    transition: all 150ms ease-in;
    transition-property: opacity, background-color, transform, mix-blend-mode;
    pointer-events: none;
    z-index: 10;
  }
  .cursor--hidden {
    opacity: 0;
  }
  .cursor--clicked {
    transform: translate(-50%, -50%) scale(0.9);
    background-color: #fefefe;
  }
`;
