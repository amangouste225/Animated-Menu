import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

const tl = gsap.timeline({ delay: 0.5 });

export const animateText = (el) => {
  tl.from(
    el,
    {
      y: 50,
      stagger: 0.15,
      ease: "power3",
      duration: 1.4,
    },
    "start"
  );
};

export const animateHeader = (el) => {
  tl.from(
    el,
    {
      y: -100,
      opacity: 0,
      stagger: 1,
      duration: 1.8,
      ease: "power3",
    },
    "start"
  );
};

// Open Menu Animation

export const animateMenuOpen = (element1, element2) => {
  tl.from([element1, element2], {
    duration: 0.7,
    height: 0,
    transformOrigin: "right top",
    skewY: 2,
    ease: "power3",
    stagger: 0.2,
  });
};

// Close Menu Animation

export const animateMenuClose = (element1, element2) => {
  tl.to([element1, element2], {
    duration: 0.8,
    height: 0,
    ease: "power4",
    stagger: 0.07,
  });
};

export const staggerText = (node) => {
  gsap.from(node, {
    duration: 0.8,
    y: 100,
    delay: 0.1,
    ease: "power3",
    stagger: 0.3,
  });
};
