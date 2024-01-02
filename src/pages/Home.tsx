import { Link } from "react-router-dom";

export const Home = () => {
  return (
    <div className="h-screen">
      <div className="h-full flex justify-start items-center wrapper">
        <h1 className="max-4xl">
          <div className="text-xl font-semibold lg:text-3xl md:text-2xl">
            The
            <span className="font-secondary uppercase logo_hover">hambrg</span>,
            is a creative, engineer driven,
          </div>
          <div className="text-xl font-semibold lg:text-3xl md:text-2xl">
            global agency working on advancing the software
          </div>
          <div className="text-xl font-semibold lg:text-3xl md:text-2xl">
            and design communities to new heights.
          </div>
        </h1>
        <div className="absolute bottom-5 z- left-1/2 -translate-x-1/2">
          <div className="animate-bounce">
            Designed by{" "}
            <Link to="https://www.linkedin.com/in/angethierry/" target="/">
              <span className="font-bold">Amangoua</span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};
