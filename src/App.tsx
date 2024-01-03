import "./global.css";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import { Home } from "./pages/Home";
import { Header } from "./components/Header";

import { useEffect, useRef, useState } from "react";
// import { animateMenuOpen, animateMenuClose } from "./components/animation";
import gsap from "gsap";
import {
  animateMenuClose,
  animateMenuOpen,
  staggerText,
} from "./components/animation";

import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

const menuLinks: { name: string; id: number; href: string }[] = [
  { name: "Intro", id: 1, href: "/" },
  { name: "Opportunities", id: 2, href: "/opportunities" },
  { name: "Solutions", id: 3, href: "/solutions" },
  { name: "Contact us", id: 4, href: "/contact" },
];

const locations: { city: string; id: number; img: string }[] = [
  { city: "Abidjan", id: 1, img: "a" },
  { city: "New York", id: 2, img: "a" },
  { city: "San Francisco", id: 3, img: "a" },
  { city: "Paris", id: 4, img: "a" },
  { city: "Beijing", id: 5, img: "a" },
];

export function App() {
  const menuLink = useRef(null);
  const hhh = useRef(null);

  const [state, setState] = useState({
    initial: false,
    clicked: false,
    menuName: "Menu",
  });

  const handleHamburger = () => {
    if (state.initial === false) {
      setState({
        initial: true,
        clicked: true,
        menuName: "Close",
      });
    } else if (state.clicked === true) {
      setState({
        clicked: !state.clicked,
        menuName: "Menu",
        initial: false,
      });
    } else if (state.clicked === false) {
      setState({
        clicked: !state.clicked,
        menuName: "Close",
        initial: true,
      });
    }
  };

  useEffect(() => {
    const reveal1 = document.querySelector(".reveal1");
    const reveal2 = document.querySelector(".reveal2");

    if (state.clicked === false) {
      animateMenuClose(reveal2, reveal1);
      gsap.to(hhh, { duration: 1, css: { display: "none" } });
    } else if (
      state.clicked === true ||
      (state.clicked === true && state.initial === null)
    ) {
      gsap.to(hhh, { duration: 0, css: { display: "block" } });
      gsap.to([reveal1, reveal2], {
        duration: 0,
        opacity: 1,
        height: "100%",
      });
      animateMenuOpen(reveal1, reveal2);
      staggerText(menuLinks);
    }
  }, [state]);
  return (
    <>
      <Router>
        <div
          className="w-full fixed h-full right-0 bottom-0 left-0 top-0 z-10 head"
          ref={hhh}
        >
          <div className="fixed w-full h-full bottom-0 right-0 left-0 top-0 bg-black -z-1 reveal1"></div>
          <div className="bg-red relative h-full overflow-hidden reveal2">
            <div className="absolute top-0 left-0 h-full w-full bg-cover bg-no-repeat">
              <div className="wrapper grid md:grid-cols-2 grid-cols-1 md:gap-20 gap-y-10 content-center items-center h-full">
                <div className="col-span-2 md:col-span-1">
                  {menuLinks.map(({ name, id, href }) => (
                    <ul key={id} className="hover:text-black">
                      <li className="xl:text-10xl text-6xl font-bold font-secondary leading-tight relative group">
                        <Link to={href} ref={menuLink}>
                          <span className="menuIds">{id}</span>
                          <span className="menuNav"> {name}</span>
                        </Link>
                      </li>
                    </ul>
                  ))}
                </div>
                <div className="text-white xl:ml-44 md:ml-10">
                  <h5 className="font-bold text-2xl font-secondary mb-5">
                    Our promises
                  </h5>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Aperiam maxime sint expedita ullam maiores exercitationem
                    iure velit repudiandae laudantium animi, ea nihil quod
                    dolorum incidunt obcaecati tempora. Ipsa, reiciendis hic?
                  </p>
                </div>
                <ul className="lg:col-span-1 col-span-2 text-white absolute bottom-5 flex gap-3 lg:gap-18 justify-between items-center flex-wrap">
                  {locations.map(({ city, id }) => (
                    <li
                      key={id}
                      className="font-primary text-bold flex cursor-pointer md:px-6 md:py-2 py-0 px-2 hover:bg-black"
                    >
                      {city}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
        <Header state={state} handleHamburger={handleHamburger} />
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
            Discover our Opportunities !
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
