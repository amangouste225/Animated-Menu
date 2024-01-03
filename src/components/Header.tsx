import { Link } from "react-router-dom";
import { Dots } from "./Dot";
import { animateHeader } from "./animation";
import { useEffect, useRef } from "react";

export interface Props {
  initial: boolean;
  clicked: boolean;
  menuName: string;
}

export interface Box {
  state: Props[];
  handleHamburger: () => void;
}

export const Header = ({ state, handleHamburger }: Box) => {
  const header = useRef(null);

  useEffect(() => {
    const wrapper = document.getElementById("header");
    animateHeader(wrapper);
  }, [state]);
  return (
    <div className="absolute w-full py-6 z-50" ref={header}>
      <header className="wrapper flex justify-between items-center">
        <div className="lg:text-2.5xl text-2xl font-semibold font-secondary">
          <Link
            to="/"
            className={`${
              state.clicked ? "logo_white text-white" : "logo_black text-black"
            } relative`}
          >
            HUNGER.
          </Link>
        </div>
        <div
          className="text-lg font-semibold cursor-pointer"
          onClick={handleHamburger}
        >
          <span>
            <button
              className={`${
                state.clicked ? "text-white" : "text-black"
              } flex items-center gap-2`}
            >
              {state.menuName} <Dots state={state} />
            </button>
          </span>
        </div>
      </header>
    </div>
  );
};
