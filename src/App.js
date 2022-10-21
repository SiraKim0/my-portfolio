import { Routes, Route } from "react-router-dom";
import Main from "./Pages/Main";
import { GlobalStyle } from "./Styles/GlobalStyle";
import Navbar from "./Components/Nav/Navbar";
import About from "./Pages/About";
import Work from "./Pages/Work";
import Contact from "./Pages/Contact";

function App() {
  return (
    <>
      <GlobalStyle />
      <Navbar />
      <Routes>
        <Route path="/" element={<Main />}></Route>
        <Route path="/about" element={<About />}></Route>
        <Route path="/work" element={<Work />}></Route>
        <Route path="/contact" element={<Contact />}></Route>
      </Routes>
    </>
  );
}

export default App;
