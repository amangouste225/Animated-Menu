import { Link } from "react-router-dom";

const menu: { name: string; id: number; href: string }[] = [
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
];
export const Hamburger = () => {
  return (
    <div className="absolute w-screen h-screen left-0 top-0 bg-red">
      <div className="wrapper grid md:grid-cols-2 grid-cols-1 gap-20 content-center items-center		h-full">
        <div className="col-span-2 md:col-span-1">
          {menu.map(({ name, id, href }) => (
            <ul key={id} className="text-white hover:text-black">
              <li className="xl:text-10xl text-6xl font-bold font-secondary leading-tight">
                <Link to={href}> {name}</Link>
              </li>
            </ul>
          ))}
        </div>
        <div className="text-white xl:ml-44 md:ml-32 ">
          <h5 className="font-bold text-2xl font-secondary mb-5">
            Our promises
          </h5>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam
            maxime sint expedita ullam maiores exercitationem iure velit
            repudiandae laudantium animi, ea nihil quod dolorum incidunt
            obcaecati tempora. Ipsa, reiciendis hic?
          </p>
        </div>
        <ul className="md:col-span-1 col-span-2 text-white self-end flex justify-between items-center flex-wrap">
          <li>
            <span className="font-black text-xl font-secondary">
              Locations :
            </span>
          </li>
          {locations.map(({ city, id }) => (
            <>
              <li key={id} className="font-primary text-bold">
                {city}
              </li>
            </>
          ))}
        </ul>
      </div>
    </div>
  );
};
