import React from "react";
import SectionComponent from "./SectionComponent";
import Link from "next/link";

export default function VidshopQuote() {
  return (
    <SectionComponent className="flex flex-col items-center justify-center text-center">
      <h2 className="font-bold text-3xl md:text-5xl text-darkBlue uppercase leading-8">
        Vidshop
      </h2>
      <p className="mt-8 text-white/80 leading-8 text-2xl">
        &quot;Say goodbye to the uncertainity of buying from unknown sites{" "}
        <br />
        and hello to the convenience of purchasing products <br />
        recommended by creators you already love&quot;
      </p>
      <Link
        href="#"
        className="p-4 bg-lightPink hover:bg-darkPink md:w-1/3 text-white hover:text-white font-bold text-center rounded-lg mt-10"
      >
        <span className="text-md uppercase tracking-wider">
          start exploring today
        </span>
      </Link>
    </SectionComponent>
  );
}
