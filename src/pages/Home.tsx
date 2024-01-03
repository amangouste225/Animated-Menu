import { useRef } from "react";
import { Link } from "react-router-dom";
import { animateText } from "../components/animation";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

export const Home = () => {
  const introRef = useRef(null);
  useGSAP(
    () => {
      const arr = gsap.utils.toArray(".textAnim");
      animateText(arr);
    },
    { scope: introRef }
  );

  return (
    <div className="h-screen">
      <div className="h-full flex justify-start items-center wrapper">
        <h1 className="max-4xl" ref={introRef}>
          <div className="text-xl font-semibold lg:text-3xl md:text-2xl overflow-hidden h-[60px]">
            <div className="textAnim">
              The
              <Link to="/" className="font-secondary uppercase logo_hover">
                HUNGER.
              </Link>
              , is a creative, engineer driven,
            </div>
          </div>
          <div className="text-xl font-semibold lg:text-3xl md:text-2xl overflow-hidden h-[60px] ">
            <div className="textAnim">
              global agency working on advancing the software
            </div>
          </div>
          <div className="text-xl font-semibold lg:text-3xl md:text-2xl overflow-hidden h-[60px]">
            <div className="textAnim">
              and design communities to new heights.
            </div>
          </div>
        </h1>
      </div>
    </div>
  );
};
