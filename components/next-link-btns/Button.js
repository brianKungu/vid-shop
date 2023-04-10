import React from "react";
import Link from 'next/link'

export default function Button({children, className}) {
  return (
    <>
      <button className={`${className} bg-lightPink py-2 px-4 rounded-md text-white font-semibold capitalize hover:bg-darkPink`}>
        {children}
      </button>
    </>
  );
}
