import React from "react";
import Link from "next/link";
export default function NXTButtonOutline({ name }) {
  return (
    <>
      <button className="border border-lightPink py-2 px-4 rounded-md text-white hover:border-darkPink font-semibold capitalize ">
        <Link href="#">{name}</Link>
      </button>
    </>
  );
}
