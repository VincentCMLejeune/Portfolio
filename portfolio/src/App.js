import { BrowserRouter, Routes, Route } from "react-router-dom";

import About from "./screens/about/About";
import Contact from "./screens/contact/Contact";
import Projets from "./screens/projets/Projets";
import Home from "./screens/home/Home";

// import styles from "./App.module.css";

export default function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/projets" element={<Projets />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}
