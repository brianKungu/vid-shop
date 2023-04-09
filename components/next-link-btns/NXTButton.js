import React from "react";
import Link from 'next/link'

export default function NXTButton({name}) {
  return (
    <>
      <button className="bg-lightPink py-2 px-4 rounded-md text-white font-semibold capitalize hover:bg-darkPink">
        <Link href="#">{name}</Link>
      </button>
    </>
  );
}
