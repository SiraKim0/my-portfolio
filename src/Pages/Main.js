import { MainContainer } from "./MainStyle";
import NavBar from "../Components/Nav/Navbar";

export default function Main() {
  return (
    <MainContainer>
      <NavBar />
      <div className="content">
        <div className="row">
          <span className="text">K</span>
          <span className="text">I</span>
          <span className="text">M</span>
          <span className="text">S</span>
          <span className="text">I</span>
          <span className="text">R</span>
          <span className="text">A</span>
        </div>
        <br />
        <div className="row">
          <span className="text">F</span>
          <span className="text">R</span>
          <span className="text">O</span>
          <span className="text">N</span>
          <span className="text">T</span>
          <span className="text">E</span>
          <span className="text">N</span>
          <span className="text">D</span>
          <span className="text">D</span>
          <span className="text">E</span>
          <span className="text">V</span>
          <span className="text">E</span>
          <span className="text">L</span>
          <span className="text">O</span>
          <span className="text">P</span>
          <span className="text">E</span>
          <span className="text">R</span>
        </div>
      </div>
    </MainContainer>
  );
}
