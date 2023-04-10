import React from "react";
import SectionComponent from "./SectionComponent";

export default function Goodbye() {
  return (
    <SectionComponent className="flex flex-col items-center justify-center text-center">
      <h2 className="font-bold text-3xl md:text-5xl text-darkBlue uppercase leading-8">
        Say goodbye to the uncertainty of shopping on{" "}
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#405DE6] via-[#C13584] to-[#F56040]">
          Instagram
        </span>{" "}
        and{" "}
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#ff0050] from-40% via-[#00f2ea] via-80% to-[#000000] t0-10%">
          Tiktok
        </span>
        .
      </h2>
      <p className="mt-8 text-white/80 leading-8 md:text-xl text-md">
        Shop from creators you already know and trust. Our platform allows you
        to discover and follow your favorite creators, so you can always stay
        up-to-date with the latest products they have to offer.
      </p>
    </SectionComponent>
  );
}
