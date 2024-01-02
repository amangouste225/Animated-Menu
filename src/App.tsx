import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Home } from "./pages/Home";
import { Header } from "./components/Header";

import "./global.css";

export const App = () => (
  <Router>
    <Header />
    <main>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/opportunities" element={<Opportunities />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/solutions" element={<Solutions />} />
      </Routes>
    </main>
  </Router>
);

export function Opportunities() {
  return (
    <>
      <div>Opportunities</div>
    </>
  );
}

export function Contact() {
  return (
    <>
      <div>Contact</div>
    </>
  );
}

export function Solutions() {
  return (
    <>
      <div>Solutions</div>
    </>
  );
}
