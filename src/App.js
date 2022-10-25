import { GlobalStyle } from "./Styles/GlobalStyle";
import { Routes, Route } from "react-router-dom";
import Main from "./Pages/Main";
import About from "./Pages/About";
import Work from "./Pages/Work";
import Contact from "./Pages/Contact";
import Skill from "./Pages/Skill";
import { Cursor } from "./Styles/GlobalStyle";

function App() {
  return (
    <>
      <GlobalStyle />
      <Cursor />
      <Routes>
        <Route path="/" element={<Main />}></Route>
        <Route path="/about" element={<About />}></Route>
        <Route path="/skill" element={<Skill />}></Route>
        <Route path="/work" element={<Work />}></Route>
        <Route path="/contact" element={<Contact />}></Route>
      </Routes>
    </>
  );
}

export default App;
