import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Home } from "./pages/Home";
import { Header } from "./components/Header";

import "./global.css";
import { Hamburger } from "./components/Hamburger";
import { useState } from "react";

export function App() {
  const [menu, setMenu] = useState(false);

  const hamburger = () => {
    setMenu(() => !menu);
  };

  return (
    <>
      <Router>
        {menu && <Hamburger />}
        <Header hamburger={hamburger} menu={menu} />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/opportunities" element={<Opportunities />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/solutions" element={<Solutions />} />
          </Routes>
        </main>
      </Router>
    </>
  );
}

export function Opportunities() {
  return (
    <div>
      <div className="wrapper">
        <div className="flex items-center h-screen justify-center">
          <h1 className="uppercase text-xl tracking-widest font-light font-secondary">
            Opportunities that help you.
          </h1>
        </div>
      </div>
    </div>
  );
}

export function Contact() {
  return (
    <div>
      <div className="wrapper">
        <div className="flex items-center h-screen justify-center">
          <h1 className="uppercase text-xl tracking-widest font-light font-secondary">
            Contact us for solutions.
          </h1>
        </div>
      </div>
    </div>
  );
}

export function Solutions() {
  return (
    <div>
      <div className="wrapper">
        <div className="flex items-center h-screen justify-center">
          <h1 className="uppercase text-xl tracking-widest font-light font-secondary">
            solutions that help you.
          </h1>
        </div>
      </div>
    </div>
  );
}
