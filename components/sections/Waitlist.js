import React from "react";
import Button from "../next-link-btns/Button";
import Link from "next/link";

export default function Waitlist() {
  return (
    <section id="waitlist" className="bg-darkPink">
      <div className="max-w-7xl mx-auto my-8 py-8 w-full px-4">
        <div className="md:flex flex-col block items-center justify-center md:gap-4 space-y-4 text-center">
          <h2 className="font-bold text-3xl md:text-5xl text-white uppercase leading-8">
            to{" "}
            <span className="bg-clip-text bg-gradient-to-r from-[#ff0050] from-40% via-[#00f2ea] via-80% to-[#000000] t0-10%">
              join
            </span>{" "}
            the waitlist
          </h2>
          <button className="bg-lightBlue hover:bg-darkBlue px-8 md:px-6 md:py-4 py-2 md:w-[300px] text-white rounded-md font-semibold ">
            <Link
              href="#"
              passHref
              className="uppercase tracking-wider text-center"
            >
              signup
            </Link>
          </button>
          <p className="text-white/80 leading-8 text-lg">
            Don&apos;t miss out on the chance to experience video shopping
          </p>
        </div>
      </div>
    </section>
  );
}
