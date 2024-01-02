import { Link } from "react-router-dom";

export const Header = () => {
  return (
    <div className="fixed  w-full">
      <div className="wrapper  flex justify-between items-center">
        <div className="text-red text-3xl font-semibold font-secondary">
          <Link to="/" className="logo relative">
            HAMBRG.
          </Link>
        </div>
        <div className="text-xl font-semibold">
          <Link to="/"> Menu</Link>
        </div>
      </div>
    </div>
  );
};
