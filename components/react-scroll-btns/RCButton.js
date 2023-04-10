import React from "react";
import { Link } from "react-scroll";
export default function RCButton({ name, to }) {
  return (
    <>
      <Link
        to={to}
        spy={true}
        smooth={true}
        offset={50}
        duration={500}
        className="cursor-pointer capitalize "
      >
        <span>{name}</span>
      </Link>
    </>
  );
}
