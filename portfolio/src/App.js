import { BrowserRouter, Routes, Route } from "react-router-dom";

import About from "./screens/about/About";
import Contact from "./screens/contact/Contact";
import Projets from "./screens/projets/Projets";
import Home from "./screens/home/Home";

import DetailAdvisor from "./screens/details projets/DetailAdvisor";
import DetailBagarre from "./screens/details projets/DetailBagarre";
import DetailGarou from "./screens/details projets/DetailGarou";
import DetailRuntime from "./screens/details projets/DetailRuntime"

// import styles from "./App.module.css";

export default function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/projets" element={<Projets />} />
          <Route path="/projets/advisor" element={<DetailAdvisor />} />
          <Route path="/projets/bagarre" element={<DetailBagarre />} />
          <Route path="/projets/garou" element={<DetailGarou />} />
          <Route path="/projets/runtime" element={<DetailRuntime />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}
