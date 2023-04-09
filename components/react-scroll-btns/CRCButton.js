import React from "react";
import { Link } from "react-scroll";

export default function CRCButton({ to,name }) {
  return (
    <button className="bg-lightPink py-2 px-4 rounded-md text-white font-semibold capitalize hover:bg-darkPink shadow-lg shadow-darkPink/40">
      <Link
        to={to}
        spy={true}
        smooth={true}
        offset={50}
        duration={500}
        className="cursor-pointer"
      >
        {name}
      </Link>
    </button>
  );
}
