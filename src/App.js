import { Routes, Route } from "react-router-dom";
import Main from "./Pages/Main";
import { GlobalStyle } from "./Styles/GlobalStyle";
// import Navbar from "./Components/Nav/Navbar";
import About from "./Pages/About";
import Work from "./Pages/Work";
import Contact from "./Pages/Contact";
import Skill from "./Pages/Skill";
// import MainTest from "./Pages/MainTest";

function App() {
  return (
    <>
      <GlobalStyle />
      {/* <Navbar /> */}
      <Routes>
        <Route path="/" element={<Main />}></Route>
        <Route path="/about" element={<About />}></Route>
        <Route path="/skill" element={<Skill />}></Route>
        <Route path="/work" element={<Work />}></Route>
        <Route path="/contact" element={<Contact />}></Route>
        {/* <Route path="/" element={<MainTest />}></Route> */}
      </Routes>
    </>
  );
}

export default App;
