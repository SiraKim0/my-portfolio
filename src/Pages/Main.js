import { MainContainer } from "./MainStyle";
import NavBar from "../Components/Nav/Navbar";
import { useEffect, useState } from "react";

export default function Main() {
  const name = "DOSI";
  const info = "FRONTEND-DEVELOPER";
  const [nameText, setNameText] = useState("");
  const [nameCount, setNameCount] = useState(0);
  const [infoText, setInfoText] = useState("");
  const [infoCount, setInfoCount] = useState(0);
  const textArr = [...nameText];
  const textArr2 = [...infoText];

  useEffect(() => {
    const interval = setInterval(() => {
      setNameText(nameText + name[nameCount]);
      setNameCount(nameCount + 1);
    }, 200);
    const interval2 = setInterval(() => {
      setInfoText(infoText + info[infoCount]);
      setInfoCount(infoCount + 1);
    }, 210);

    if (nameCount === name.length) {
      clearInterval(interval);
    }

    if (infoCount === info.length) {
      clearInterval(interval2);
    }
    return () => {
      clearInterval(interval);
      clearInterval(interval2);
    };
  });
  return (
    <MainContainer>
      <NavBar />
      <div className="content">
        <div className="row">
          {textArr.map((text, idx) => {
            return (
              <span key={idx} className="text">
                {text}
              </span>
            );
          })}
        </div>
        <br />
        <div className="row">
          {textArr2.map((text, idx) => {
            return (
              <span key={idx} className="text">
                {text}
              </span>
            );
          })}
        </div>
      </div>
    </MainContainer>
  );
}
