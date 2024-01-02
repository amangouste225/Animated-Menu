import { Link } from "react-router-dom";

interface Props {
  hamburger: () => void;
  menu: boolean;
}

export const Header = ({ hamburger, menu }: Props) => {
  return (
    <div className="fixed w-full p-2 z-50">
      <div className="wrapper  flex justify-between items-center">
        <div className="text-3xl font-semibold font-secondary">
          {menu ? (
            <Link to="/" className="logo_white relative text-white ">
              HAMBRG.
            </Link>
          ) : (
            <Link to="/" className="logo_black relative text-black ">
              HAMBRG.
            </Link>
          )}
        </div>
        <div
          className="text-xl font-semibold cursor-pointer"
          onClick={hamburger}
        >
          <span>
            {menu ? (
              <button className="text-white"> Close</button>
            ) : (
              <button> Menu</button>
            )}
          </span>
        </div>
      </div>
    </div>
  );
};
