import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import Project from "./Pages/Project";
import About from "./Pages/About";
import Contact from "./Pages/Contact";
import Nav from "./components/Nav";

function App() {
  return (
    
    
    <BrowserRouter basename={import.meta.env.DEV ? "/" : "Riiskager.github.io"}>
      
     <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/project" element={<Project />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </BrowserRouter>
  );
}
export default App;
