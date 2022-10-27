import { MainContainer } from "./MainStyle";
import Navbar from "../Components/Nav/Navbar";
import { useEffect, useState } from "react";
import { ImFolderOpen } from "react-icons/im";

export default function Main() {
  const name = "DOSI";
  const info = "FRONTEND-DEVELOPER";
  const [nameText, setNameText] = useState("");
  const [nameCount, setNameCount] = useState(0);
  const [infoText, setInfoText] = useState("");
  const [infoCount, setInfoCount] = useState(0);
  const textArr = [...nameText];
  const textArr2 = [...infoText];
  const [hidden, setHidden] = useState(false);

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
    setTimeout(() => {
      setHidden(true);
    }, "5000");
    return () => {
      clearInterval(interval);
      clearInterval(interval2);
    };
  });
  return (
    <MainContainer>
      <Navbar />
      <div className="content">
        <div className="row">
          <div className="name">
            {textArr.map((text, idx) => {
              return (
                <span key={idx} className="text">
                  {text}
                </span>
              );
            })}
          </div>
          <div className="info">
            {textArr2.map((text, idx) => {
              return (
                <span key={idx} className="text">
                  {text}
                </span>
              );
            })}
          </div>
        </div>
        {hidden ? (
          <div className="folder">
            <ImFolderOpen size="250" color="white" />
            <button>show work</button>
          </div>
        ) : null}
      </div>
    </MainContainer>
  );
}
